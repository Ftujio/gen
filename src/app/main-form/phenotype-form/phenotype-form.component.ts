import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { FormService } from '../services/form.service';

@Component({
  selector: 'app-phenotype-form',
  templateUrl: './phenotype-form.component.html',
  styleUrls: ['./phenotype-form.component.css']
})
export class PhenotypeFormComponent implements OnInit {

	data;
	form: FormGroup = new FormGroup({
		checkboxes: new FormArray([
			new FormControl('autism'),
			new FormControl(),
			new FormControl(),
			new FormControl(),
			new FormControl(),
			new FormControl(),
		])
	});

	constructor(private formService: FormService, private builder: FormBuilder) {
		this.formService.getPhenotypes().subscribe(
			data => {
				this.data = data.data;
				//console.log(this.data);
				let formControlArray = [];

				for(let i = 0; i < this.data.length; i++){
					formControlArray.push(new FormControl(this.data[i].description));
				}

				this.form = new FormGroup({
					checkboxes: new FormArray(formControlArray),
				});
			}
		);
	}

	ngOnInit() {
		
	}

	formSubmit(){
		console.log(this.form);
	}

}
