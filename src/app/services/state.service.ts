import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StateService {

  constructor(private http: HttpClient) { 
 }
  getState(){
  	return this.http.get('/api/state');
  }
}
