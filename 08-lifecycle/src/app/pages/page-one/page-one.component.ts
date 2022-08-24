import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styles: [
  ]
})
export class PageOneComponent 
implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
            AfterViewInit, AfterViewChecked, OnDestroy {

  name: string = 'Daniel';
  seconds: number = 0;
  timerSubscription!: Subscription;

  constructor() { 
    console.log('Constructor Pag1');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method ngOnChanges.');
  }
  ngDoCheck(): void {
    console.log('Method ngDoCheck.');
  }
  ngAfterContentInit(): void {
    console.log('Method ngAfterContentInit.');
  }
  ngAfterContentChecked(): void {
    console.log('Method ngAfterContentChecked.');
  }
  ngAfterViewInit(): void {
    console.log('Method ngAfterViewInit.');
  }
  ngAfterViewChecked(): void {
    console.log('Method ngAfterViewChecked.');
  }
  ngOnDestroy(): void {
    console.log('Method ngOnDestroy.');
    this.timerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log('ngOnInit Pag1');
    this.timerSubscription = interval(1000).subscribe( i => {console.log(i); this.seconds = i }
    )
    
  }

  save() {

  }

}
