import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class UserService {
private userSubject = new BehaviorSubject<User | null >(null);
user$ = this.userSubject.asObservable();


  constructor(private router:Router) { }

login(id:number,email:string,username:string){
  const user : User ={id,email,username}
  this.userSubject.next(user)
  this.router.navigate(['/user'])
  

}

logout(){
  this.userSubject.next(null)
  this.router.navigate(['/login'])
}

getUser():Observable<User|null>{
  return this.user$;

}

}
