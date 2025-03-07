import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
id = 0;  
username = '';
email = '';

constructor(private userService: UserService) {}

login(){
  this.userService.login(this.id,this.username,this.email)
}

}
