import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Email } from '../email-interface';

@Injectable({
  providedIn: 'root'
})

export class SendEmailMessageService {

  url = "http://localhost:5000/messages"

  constructor(private http: HttpClient) { }

  saveEmail( email:Email ): Observable<Email> {
    return this.http.post<Email>(this.url, email)
  }

  getEmail ( id: number ): Observable<Email[]> {
    return this.http.get<Email[]>(this.url)
  }
}
