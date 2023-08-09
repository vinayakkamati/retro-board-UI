import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto.interface';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private registrationService: RegistrationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute){}
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
        () => this.router.navigate(['/board']).then(() => {window.location.reload();
        })
      ) 
  }
}
