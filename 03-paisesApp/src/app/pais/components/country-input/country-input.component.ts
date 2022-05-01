import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{


  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() strPlaceHolder: string= '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe({
      next: (v) => {
        this.onDebounce.emit(v);
      }
    })
  }


  buscar() {
    this.onEnter.emit(this.termino);
  }

  keyPress() {

    this.debouncer.next(this.termino);



  }

}
