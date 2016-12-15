import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

@Injectable()
export class HeroService {
	constructor (private http: HttpModule) {}

	private phenotypesUrl = '';
}