import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray , AbstractControl } from '@angular/forms';

import { FormService } from '../services/form.service';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-phenotype-form',
  templateUrl: './phenotype-form.component.html',
  styleUrls: ['./phenotype-form.component.css']
})
export class PhenotypeFormComponent implements OnInit {

	data;
	form: FormGroup;

	constructor(private formService: FormService, public builder: FormBuilder) {
		
	}

	ngOnInit() {
		
	}

	onSubmit(form: NgForm){
		console.log(form.value);
	}

}
