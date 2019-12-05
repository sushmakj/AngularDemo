import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.modal';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private _http:HttpClient) { }

  getUser() {
    return this._http.get<User[]>(this.apUrl);
  }
}
