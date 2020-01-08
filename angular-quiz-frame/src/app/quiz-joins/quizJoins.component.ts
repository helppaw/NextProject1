import { Component, OnInit } from '@angular/core';
import { AppUser } from '../model/user.model';
import { QuizJoinService } from '../services/quizJoin.service'

@Component({
  selector: 'app-quizJoins',
  templateUrl: './quizJoins.component.html',
  styleUrls: ['./quizJoins.component.css']
})
export class QuizJoinsComponent implements OnInit {
  quizJoins: AppUser[];



  constructor(private quizJoinService: QuizJoinService) { }

  ngOnInit() {
    this.getQuizJoins();
    }
  
  

  getQuizJoins(): void {
    this.quizJoinService.getQuizJoins()
      .subscribe(quizJoins => this.quizJoins = quizJoins);
  }
}

