import { Component } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto.interface';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  constructor(private registrationService: RegistrationService,private router: Router){}
 
  createUser(user: UserDTO): void{
    this.registrationService.createUser(user).subscribe(
      () =>{
        this.router.navigate(['/'])
      }
    );
  }
}
