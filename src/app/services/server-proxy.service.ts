import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerProxyService {
  private baseUrl: string = 'https://swapi.co/api/';
  constructor(private httpClient: HttpClient) { }
  public get(casePart): Observable<any> {
    const url = this.baseUrl + casePart;
    return this.httpClient.get(url).pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
