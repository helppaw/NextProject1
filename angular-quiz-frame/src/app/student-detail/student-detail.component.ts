import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppUser }         from '../model/user.model';
import { QuizJoinService }  from '../services/quizJoin.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: [ './student-detail.component.css' ]
})
export class StudentDetailComponent implements OnInit {
  @Input() student: AppUser;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    ;
  }


  goBack(): void {
    this.location.back();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/