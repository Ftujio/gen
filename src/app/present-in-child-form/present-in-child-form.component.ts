import { Component, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { FormChecker } from '../form-checker';

@Component({
  selector: 'app-present-in-child-form',
  templateUrl: './present-in-child-form.component.html',
  styleUrls: ['./present-in-child-form.component.css']
})
export class PresentInChildFormComponent implements OnInit {
	formChecker: FormChecker = new FormChecker;

	constructor(private formService: FormService){
		console.log('PresentInChildFormComponent loaded');
	}
	
	ngOnInit(){
		this.formService.getPresentInChild().subscribe(
			data => this.formChecker.checkboxes = data
		);
	}
}
