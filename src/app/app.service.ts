import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {}

  gimmeJokes() {
    return this.httpClient.get('https://api.chucknorris.io/jokes/random');
  }
}
