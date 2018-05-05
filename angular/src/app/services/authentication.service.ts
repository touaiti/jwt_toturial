import { Injectable } from '@angular/core';
import { User } from '../models/user'
import { HttpHeaders, HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class AuthenticationService {
  private url = 'http://127.0.0.1:3000/api/';
  private httpOptions = {
    headers: new HttpHeaders(
      { 
        'Content-Type': 'application/json'
      }
    )
  };
  constructor(private http: HttpClient) { 

  }
  
  signUp (user: User): Observable<User> {
    return this.http.post<User>(this.url+'signup', user, this.httpOptions)
    .pipe(
      tap((user: User) => this.log(`added user w/ id=${user._id}`)),
      catchError(this.handleError<User>('SignUp'))
    );
  }

  signIn (user: User): Observable<User> {
    return this.http.post<User>(this.url+'signin', user, this.httpOptions)
    .pipe(
      tap((user: User) => this.log(`added user w/ id=${user._id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error);
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }
 
  private log(message: string) {
    console.log('error')
  }
}