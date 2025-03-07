import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports:[FormsModule,CommonModule]
})
export class UserComponent {
  user$: Observable<User | null>;

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser(); // Subscribe to user state
  }

  logout() {
    this.userService.logout();
  }
}
