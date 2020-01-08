import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { AppUser as QuizJoin } from '../model/user.model';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuizJoinService {

  private quizJoinsUrl = 'http://localhost:8080/PawQuiz/quiz-joins'; //url to web api w/ quizJoins (make servlet on Server)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  /** GET quizJoins from the server */
  getQuizJoins (): Observable<QuizJoin[]> {
    return this.http.get<QuizJoin[]>(this.quizJoinsUrl)
      .pipe(
        tap(_ => this.log('fetched quizJoins')),
        catchError(this.handleError<QuizJoin[]>('getQuizJoins', []))
      );
  }

  // /** GET student by id. Return `undefined` when id not found */
  // getQuizJoinNo404<Data>(id: number): Observable<QuizJoin> {
  //   const url = `${this.quizJoinsUrl}/?id=${id}`;
  //   return this.http.get<QuizJoin[]>(url)
  //     .pipe(
  //       map(quizJoins => quizJoins[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} student id=${id}`);
  //       }),
  //       catchError(this.handleError<QuizJoin>(`getQuizJoin id=${id}`))
  //     );
  // }

  // /** GET student by id. Will 404 if id not found */
  // getQuizJoin(id: number): Observable<QuizJoin> {
  //   const url = `${this.quizJoinsUrl}/${id}`;
  //   return this.http.get<QuizJoin>(url).pipe(
  //     tap(_ => this.log(`fetched student id=${id}`)),
  //     catchError(this.handleError<QuizJoin>(`getQuizJoin id=${id}`))
  //   );
  // }

  // /* GET quizJoins whose name contains search term */
  // searchQuizJoins(term: string): Observable<QuizJoin[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty student array.
  //     return of([]);
  //   }
  //   return this.http.get<QuizJoin[]>(`${this.quizJoinsUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found quizJoins matching "${term}"`)),
  //     catchError(this.handleError<QuizJoin[]>('searchQuizJoins', []))
  //   );
  // }

/** PUT: update the student on the server */
// make sure to have this update other things other than id.
// It needs to update active... for quizes..in something else.. for quizes, not quizJoins
// updateQuizJoin (quizJoin: QuizJoin): Observable<any> {
//   return this.http.put(this.quizJoinsUrl, quizJoin, this.httpOptions).pipe(
//     tap(_ => this.log(`updated student id=${quizJoin.id}`)),
//     catchError(this.handleError<any>('updateQuizJoin'))
//   );
// }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a QuizJoinService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`QuizJoinService: ${message}`);
  }
}

  /*

Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/