import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DelinquencyService {

  constructor(private http: HttpClient) { }

  getDelinquency(){
  	return this.http.get('/api/delinquency');
  }
}
