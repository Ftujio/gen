import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray , AbstractControl } from '@angular/forms';

import { FormService } from '../services/form.service';

@Component({
  selector: 'app-phenotype-form',
  templateUrl: './phenotype-form.component.html',
  styleUrls: ['./phenotype-form.component.css']
})
export class PhenotypeFormComponent implements OnInit {

	data;
	form: FormGroup;

	constructor(private formService: FormService, public builder: FormBuilder) {
		this.formService.getPhenotypes().subscribe(
			data => {
				this.data = data.data;
				//console.log(this.data);
				let formControlArray = [];

				for(let i = 0; i < this.data.length; i++){
					formControlArray.push(new FormControl(this.data[i].description));
				}

				/*this.form = new FormGroup({
					checkboxes: new FormArray(formControlArray),
				});*/
			}
		);
	}

	ngOnInit() {
		this.buildForm();
	}

	buildForm(){
		this.form = new FormGroup({	
			test: new FormControl(),
			other: new FormControl(),
		});

		this.form.valueChanges.subscribe(data => console.log('some data: ', data));	
	}

	onSubmit(){
		console.log(this.form.value);
	}

}
