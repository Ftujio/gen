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

	getPresentInChild(){
		return this.http.get('http://localhost:4200/assets/present.in.child.json').map(response => response.json());
	}

	getPresentInParent(){
		return this.http.get('http://localhost:4200/assets/present.in.parent.json').map(response => response.json());
	}

	getEffectTypes(){
		return this.http.get('http://localhost:4200/assets/effect.types.json').map(response => response.json());
	}

	getChildGender(){
		return this.http.get('http://localhost:4200/assets/child-gender.json').map(response => response.json());
	}

	getStudyTypes(){
		return this.http.get('http://localhost:4200/assets/study-types.json').map(response => response.json());
	}

	getVariantTypes(){
		return this.http.get('http://localhost:4200/assets/variant-types.json').map(response => response.json());
	}
}