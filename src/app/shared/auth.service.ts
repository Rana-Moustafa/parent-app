import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { resolve } from 'url';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthRequestData } from '../models/AuthRequestData';
import { AuthResponseData } from '../models/AuthResponseData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userLogin(userData) {
    return this.http.post<AuthResponseData>(environment.baseUrl + 'login',
      userData
    ).pipe(catchError(this.handleError), tap(resData => {
      return (resData.token);
    }));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = errorRes.error.error;
    if (!errorRes.error || !errorRes.error.message) {
      return throwError(errorMessage);
    }
    errorMessage = errorRes.error.message;
    return throwError(errorMessage);
  }

  isLoggedIn() {
    if (localStorage.getItem('USER_TOKEN')) {
      return true;
    }
    return false;
  }

}
