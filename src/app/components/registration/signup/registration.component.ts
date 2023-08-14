import { Component } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto.interface';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;
  user:UserDTO =new UserDTO;
  error = null;  
  timeoutId?: number;

  constructor(private registrationService: RegistrationService,
    private router: Router,
    private formBuilder: FormBuilder){}
  ngOnInit() {
    this.form = this.formBuilder.group({
        name: ['', Validators.required],
        emailId:['', Validators.required],
        password:['', Validators.required],
        c_password: ['', Validators.required]
    }, {validator: this.checkIfMatchingPasswords('password', 'c_password')});
}
  checkIfMatchingPasswords(passwordKey: string, c_password: string): any {
    return (form: FormGroup) => {
      let passwordInput = form.controls[passwordKey],
          passwordConfirmationInput = form.controls[c_password];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }

get f() { return this.form.controls; }
 
  createUser(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.user.userName = this.f.name.value;
    this.user.emailId = this.f.emailId.value;
    this.user.password = this.f.password.value;
    this.registrationService.createUser(this.user).subscribe(
      () =>{
        this.router.navigate(['/'])
      },
      error => {
        this.error=error.error.message;
          this.resetTimer();
      }
    );
  }

  resetTimer(): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => {
      this.error = null;
    }, 3000);
  }
}
