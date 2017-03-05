import { Component, EventEmitter, OnInit, Input } from '@angular/core';

import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.css']
})
export class GeneComponent implements OnInit {

	@Input() formValue: any;
	form: FormGroup;

	constructor(public fb: FormBuilder){
		this.form = this.fb.group({
			radio: this.fb.group({
				'gene': ['']
			}, {validator: this.radioRequired})
		});
	}

	radioRequired(group){

	}

	setMessage(){


		this.formValue['genes'] = this.form.value.radio.gene;
	}

	ngOnInit(){}

	onSubmit(){
		console.log(this.form.value);
	}

}
