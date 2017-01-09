import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormService } from './services/form.service';
import { FormChecker } from './form.control';

@Component({
	selector: 'present-in-child-form',
	templateUrl: 'app/templates/present.in.child.component.html',
	styleUrls: ['app/css/form.component.css']
})
export class PresentInChildFormComponent{
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