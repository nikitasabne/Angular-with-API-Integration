import { Component, inject } from '@angular/core';
import { RegisterUser } from '../../../Model/register-user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../Service/user.service';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent {
  userService = inject(UserService);
  userObj: RegisterUser = new RegisterUser();

  CreateNewUser() {
    this.userService.CreateUser(this.userObj).subscribe(() => {
      alert('User Created successfully');
    });
  }
}
