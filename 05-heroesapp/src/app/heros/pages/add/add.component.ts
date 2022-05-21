import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heros.interface';
import { HerosService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      descrip: 'DC-Comics',
    },
    {
      id: 'Marvel Comics',
      descrip: 'Marvel',
    },
  ];

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: '',
  };

  constructor(
    private _herosService: HerosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this._herosService.getHeroById(id)))
      .subscribe((resp) => {
        this.hero = resp;
      });
  }

  save() {
    if (!this.validateHero()) {
      return;
    }

    if (!this.hero.id) {
      this._herosService.addHero(this.hero).subscribe((hero) => {
        this.openSnackBar('Hero Created');
        this.router.navigate(['/heros/edit', hero.id]);
      });
    } else {
      this._herosService.updateHero(this.hero).subscribe((hero) => {
        this.openSnackBar('Hero Updated');
      });
    }
  }

  delete() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '50%',
      data: { ...this.hero },
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this._herosService.deleteHero(this.hero.id!).subscribe((resp) => {
          this.router.navigate(['/heros']);
        });
      }
    });
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'ok!', {
      duration: 3000,
    });
  }

  validateHero(): boolean {
    if (this.hero.superhero.trim().length <= 0) {
      return false;
    }

    if (this.hero.alter_ego.trim().length <= 0) {
      return false;
    }
    if (this.hero.characters.trim().length <= 0) {
      return false;
    }
    if (this.hero.first_appearance.trim().length <= 0) {
      return false;
    }
    return true;
  }
}
