import { Component } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 
  createUser(user: UserDTO): void{
    console.log(user.userName);
  }
}
