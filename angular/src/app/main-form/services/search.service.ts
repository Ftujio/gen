import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

	constructor(private http: Http) {}

	getData(){
		return this.http.get('http://localhost:4200/assets/response.json').map(response => response.json());
	}

}