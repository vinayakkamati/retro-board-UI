import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/registration/login/log-in.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/signup/registration.component';
import { FormsModule } from '@angular/forms';
import { BoardItemComponent } from './components/board/board-item/board-item.component';
import { CommentItemComponent } from './components/board/comment-item/comment-item.component';

const appRoutes: Routes = [
  {path:'', component: LogInComponent},
  {path:'register', component: RegistrationComponent},
  {path:'board', component: BoardItemComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    BoardItemComponent,
    CommentItemComponent
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
