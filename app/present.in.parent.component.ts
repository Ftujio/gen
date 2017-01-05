import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormService } from './services/form.service';
import { FormControl } from './form.control';

@Component({
	selector: 'present-in-parent-form',
	templateUrl: 'app/templates/present.in.parent.component.html',
	styleUrls: ['app/css/form.component.css']
})
export class PresentInParentFormComponent{
	formControl: FormControl = new FormControl;

	constructor(private formService: FormService){
		console.log('PresentInParentFormComponent loaded');
	}
	
	ngOnInit(){
		this.formService.getPresentInParent().subscribe(
			data => this.formControl.checkboxes = data
		);
	}
}