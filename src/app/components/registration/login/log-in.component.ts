import { Component, EventEmitter } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto.interface';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private registrationService: RegistrationService,private router: Router){}

  validateUser(user:UserDTO){
    this.registrationService.validateUser(user)
    .subscribe((currentUser: UserDTO) =>  
    this.registrationService.saveCurrentUser(currentUser));
    this.router.navigate(['/board']).then(() => {
      window.location.reload();
    });
  }
}
