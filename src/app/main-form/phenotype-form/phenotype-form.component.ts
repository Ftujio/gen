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
		this.form = this.builder.group({	
			test: new FormControl()
		});

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
		
	}

	formSubmit(){
		console.log(this.form.value);
	}

}
