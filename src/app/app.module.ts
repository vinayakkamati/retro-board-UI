import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/registration/login/log-in.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/signup/registration.component';
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
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
