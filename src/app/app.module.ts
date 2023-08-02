import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path:'', component: LogInComponent},
  {path:'register', component: RegistrationComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
