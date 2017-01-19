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
	arr: FormArray;
	form;

	constructor(private formService: FormService) {

	}

	ngOnInit() {
		this.formService.getPhenotypes().subscribe(
			data => {
				this.data = data;
				console.log(data.data);
				let formControlArray = [];
				for(let i = 0; i < this.data.data.length; i++){
					formControlArray.push(new FormControl(this.data.data[i].description));
				}

				this.arr = new FormArray(formControlArray);
				this.form = new FormGroup({
					checkboxes: new FormArray(formControlArray)
				});
			}
		);
	}

}
