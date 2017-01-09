import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormService } from './services/form.service';
import { FormChecker } from './form.control';

@Component({
	selector: 'present-in-parent-form',
	templateUrl: 'app/templates/present.in.parent.component.html',
	styleUrls: ['app/css/form.component.css']
})
export class PresentInParentFormComponent{
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