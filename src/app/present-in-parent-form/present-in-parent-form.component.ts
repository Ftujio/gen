import { Component, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { FormChecker } from '../form-checker';

@Component({
  selector: 'app-present-in-parent-form',
  templateUrl: './present-in-parent-form.component.html',
  styleUrls: ['./present-in-parent-form.component.css', '../../public/css/reset.css']
})
export class PresentInParentFormComponent implements OnInit {
	formChecker: FormChecker = new FormChecker;

	constructor(private formService: FormService){
		console.log('PresentInParentFormComponent loaded');
	}
	
	ngOnInit(){
		this.formService.getPresentInParent().subscribe(
			data => this.formChecker.checkboxes = data
		);
	}
}
