import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiUrl = 'https://test.worldsacross.com/api';

  constructor( private http: HttpClient ) { }

  getTutors(): Observable<any> {
    return this.http.get(this.apiUrl+`/tutors`);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl+`/users`);
  }

  getBooking(): Observable<any> {
    return this.http.get(this.apiUrl+`/booking`);
  }
}
