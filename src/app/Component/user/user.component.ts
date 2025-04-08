import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../Service/user.service';
import { LoginUser } from '../../../Model/login-user';
import { Router } from '@angular/router';
import { SessionService } from '../../../Service/session.service';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userService = inject(UserService);
  userObj: LoginUser = new LoginUser();

  constructor(private route: Router, private sessionService: SessionService) {}

  LoginUser() {
    this.userService.LoginUser(this.userObj).subscribe((result: any) => {
      localStorage.setItem('token', result.jwtToken);
      alert('User Logged-in successfully');

      // ⏱️ Start session timer right after login
      this.sessionService.startSessionTimer();

      this.route.navigateByUrl('/region');
    });
  }
}
