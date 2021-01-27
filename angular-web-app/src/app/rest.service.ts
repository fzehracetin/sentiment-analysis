import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Result } from './Result';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) {}

  url : string = "http://127.0.0.1:8080/";

  getResponse(sentence: string): Observable<any> {
    /*let params = new HttpParams();
    params.append("query", sentence)*/
    return this.http.get<any>(this.url,
      {
        headers: new HttpHeaders(
          {'Content-Type': 'undefined',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Origin',
          'Access-Control-Allow-Credentials': 'true'
        }),
       params: {'query': sentence}
     });
  }
}
