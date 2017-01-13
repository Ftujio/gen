import { Component, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { FormChecker } from '../form-checker';

@Component({
  selector: 'app-effect-types-form',
  templateUrl: './effect-types-form.component.html',
  styleUrls: ['./effect-types-form.component.css', '../../public/css/reset.css']
})
export class EffectTypesFormComponent implements OnInit {
	formChecker: FormChecker = new FormChecker;

	constructor(private formService: FormService){
		console.log('EffectTypesFormComponent loaded');
	}
	
	ngOnInit(){
		this.formService.getEffectTypes().subscribe(
			data => {
				//this.formControl.checkboxes = data;
				for(let cb of data){
					for(let c of cb.data){
						this.formChecker.checkboxes.push(c);
					}
				}
			}
		);
	}
}
