import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './app/dashboard/dashboard.component';
import { StudentDetailComponent } from './app/student-detail/student-detail.component';
import { LoginComponent } from './app/login/login.component';
import { QuizJoinsComponent } from './app/quiz-joins/quizJoins.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: 'quizJoin', component: QuizJoinsComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/