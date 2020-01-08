import { Component, OnInit } from '@angular/core';

import { QuizJoinService } from '../services/quizJoin.service';
import { QuizJoin } from '../model/quizJoin.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  quizJoins: QuizJoin[] = [];

  constructor(private quizJoinService: QuizJoinService) { }

  ngOnInit() {
    this.getQuizJoins();
  }

  getQuizJoins(): void {
    this.quizJoinService.getQuizJoins()
      .subscribe(quizJoins => this.quizJoins);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/