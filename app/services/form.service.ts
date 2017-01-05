import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FormService {
	private phenotypesUrl = 'http://private-de10f-seqpipe.apiary-mock.com/phenotypes';

	constructor (private http: Http) {}

	getPhenotypes(){
		return this.http.get(this.phenotypesUrl).map(response => response.json());
	}
}