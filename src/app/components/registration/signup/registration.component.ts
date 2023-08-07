import { Component } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto.interface';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  constructor(private registrationService: RegistrationService){}
 
  createUser(user: UserDTO): void{
    this.registrationService.createUser(user).subscribe(
      (user: UserDTO) =>{
        console.log(user);
      }
    );
  }
}
