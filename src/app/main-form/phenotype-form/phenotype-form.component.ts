import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray , AbstractControl } from '@angular/forms';

import { FormService } from '../services/form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-phenotype-form',
  templateUrl: './phenotype-form.component.html',
  styleUrls: ['./phenotype-form.component.css']
})
export class PhenotypeFormComponent implements OnInit {

	data;
	form: FormGroup;

	constructor(private formService: FormService, public builder: FormBuilder) {
		this.buildForm();
	}

	ngOnInit() {
		
	}

	buildForm(){
		this.form = new FormGroup({	
			test: new FormControl(),
			other: new FormControl(),
		});

		//this.form.valueChanges.subscribe(data => console.log('some data: ', data));
	}

	onSubmit(){
		console.log(this.form.value);
	}

}
