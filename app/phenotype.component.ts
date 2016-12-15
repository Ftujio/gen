import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'phenotype',
	templateUrl: 'app/templates/phenotype.component.html'
})

export class PhenotypeComponent{
	checkAll(){
		console.log('pressed all button!');
	}

	checkNone(){
		console.log('pressed none button!');
	}

	constructor() {
		/*this.allCtrl = new Control();
		this.allCtrl.valueChanges.subscribe((val) => {
			this.projectdata.LoginResponse.ProjectVM.forEach((project) => {
				project.isChecked = val;
			});
		});*/
	}
}