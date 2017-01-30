import { Component, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phenotype-form',
  templateUrl: './phenotype-form.component.html',
  styleUrls: ['./phenotype-form.component.css']
})
export class PhenotypeFormComponent implements OnInit {

	data;

	constructor(private formService: FormService) {
		this.formService.getPhenotypes().subscribe(
			data => {
				this.data = data.data;
				//console.log(this.data);
			}
		);
	}

	ngOnInit() {
		
	}

	onSubmit(form: NgForm){
		console.log(form.value);


	}

	checkStatus(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			console.log("\"", key, "\"", ": \"", value, "\"");
		}

		console.log(form.value);
	}

}
