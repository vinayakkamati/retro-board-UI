import { Component, EventEmitter, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
  form!: FormGroup;
  submitted = false;
  error = null;  
  timeoutId?: number;

  constructor(private registrationService: RegistrationService,
    private router: Router,
    private formBuilder: FormBuilder){}
  ngOnInit() {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
}

get f() { return this.form.controls; }

  validateUser(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.registrationService.saveCurrentUser(this.f.username.value, this.f.password.value)
      .subscribe(
        {
          next: () => {
              this.router.navigate(['/board']).then(() => {window.location.reload();
              })
          },
          error: error => {
            this.error=error.error.message;
              this.resetTimer();
          }
        }
      ) 
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