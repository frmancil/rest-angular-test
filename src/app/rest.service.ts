import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://data.winnipeg.ca/resource/8xrn-n992.json');
  }
}
