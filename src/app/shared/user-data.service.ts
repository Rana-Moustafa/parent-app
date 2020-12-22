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
export class UserDataService {

  constructor(private http: HttpClient) { }

  getUsers(pageNumber) {
    return this.http.get(`${environment.baseUrl}users?page=${pageNumber}&per_page=4`);
  }

  getSingleUser(id) {
    return this.http.get(`${environment.baseUrl}users/${id}`);
  }

  addUser(user) {
    return this.http.post(`${environment.baseUrl}users`, user);
  }

  editUser(id, userData) {
    return this.http.put(`${environment.baseUrl}users/${id}`, userData);
  }
}
