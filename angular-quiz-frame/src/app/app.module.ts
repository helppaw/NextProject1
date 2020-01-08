import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { QuizJoinsComponent } from './quiz-joins/quizJoins.component';




@NgModule({
  declarations: [
    AppComponent,
    QuizJoinsComponent,
    DashboardComponent,
    StudentDetailComponent,
    MessagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
