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
 this.store.dispatch(increment())
   
  }

decrement(){
 this.store.dispatch(decrement())
}

ngOnInit(): void {
  
}
}
