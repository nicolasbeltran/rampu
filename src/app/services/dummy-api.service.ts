import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  headersDummy = {
    'app-id' : '5fd7f9fb8a915ed28de72eaf'
  }

  constructor(private httpClient: HttpClient) {

   }

   getUsers(): Observable<any> {
    return new Observable(obs => {
      this.httpClient.get('https://dummyapi.io/data/api/user', { headers: this.headersDummy }).subscribe(
        response => {
          obs.next(response)
        },
        error => {
         console.log('error', error);
        }
      )
    })
   }

   getUserProfile(userId): Observable<any>{
    return new Observable(obs => {
      this.httpClient.get('https://dummyapi.io/data/api/user/' + userId, { headers: this.headersDummy }).subscribe(
        response => {
          obs.next(response)
        },
        error => {
         console.log('error', error);
        }
      )
    })

   }
}
