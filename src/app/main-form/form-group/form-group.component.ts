import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {

	value: any;
	display: boolean = true;
	valid: number = 0;
	trueValid: boolean = false;
	a1: boolean = false;
	a2: boolean = false;
	a3: boolean = false;
	a4: boolean = false;
	a5: boolean = false;

	constructor() {
		this.value = {
			"genes": "",
			"phenotype": "",
			"child-gender": "",
			"variant-types": "",
			"study-types": "",
			"effect-types": "",
			"valid": ""
		};
	}

	ngOnInit() {
	}

	// BEGIN of output event handlers
	handlePhenotype(form){
		this.value['phenotype'] = form.value;
	}

	handleChildGender(form){
		this.value['child-gender'] = form.value;
	}

	handleVariantTypes(form){
		this.value['variant-types'] = form.value;
	}

	handleStudyTypes(form){
		this.value['study-types'] = form.value;
	}

	handleEffectTypes(form){
		this.value['effect-types'] = form.value;
	}

	handleValidity(valid){
		//console.log(valid);
		if(!valid){
			this.valid--;
		} else {
			this.valid++;
		}
	}

	handle1(valid){
		if(!this.a1 && valid){
			this.handleValidity(valid);
			this.a1 = true;
		}

		if(!this.a1 && !valid){
			this.handleValidity(valid);
			this.a1 = false;
		}
	}

	handle2(valid){
		if(!this.a2 && valid){
			this.handleValidity(valid);
			this.a2 = true;
		}

		if(!this.a2 && !valid){
			this.handleValidity(valid);
			this.a2 = false;
		}
	}

	handle3(valid){
		if(!this.a3 && valid){
			this.handleValidity(valid);
			this.a3 = true;
		}

		if(!this.a3 && !valid){
			this.handleValidity(valid);
			this.a3 = false;
		}
	}

	handle4(valid){
		if(!this.a4 && valid){
			this.handleValidity(valid);
			this.a4 = true;
		}

		if(!this.a4 && !valid){
			this.handleValidity(valid);
			this.a4 = false;
		}
	}

	handle5(valid){
		if(!this.a5 && valid){
			this.handleValidity(valid);
			this.a5 = true;
		}

		if(!this.a5 && !valid){
			this.handleValidity(valid);
			this.a5 = false;
		}
	}
	// END

	submitForm(formValue){
		console.log('submit: ', this.valid);
		if(this.valid == 0){
			console.log('test');
			this.trueValid = true;
			this.display = false;	
		}
	}

}
