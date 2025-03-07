import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {increment} from '../counter.action';
import { decrement } from '../counter.action';


@Component({
  selector: 'app-counter-output',
  imports: [CommonModule,AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit {
count$:Observable<number>
number = 1


  constructor(private store:Store<{counter:number}>){
this.count$ = store.select('counter')
  }

increment(){
  console.log(`before increment dispatching value : ${this.number}`)
 this.store.dispatch(increment({ value: this.number }))
   
  }

decrement(){
  console.log(`before decrement dispatching value : ${this.number}`)
 this.store.dispatch(decrement({ value: this.number }))
}

ngOnInit(): void {
  
}
}
