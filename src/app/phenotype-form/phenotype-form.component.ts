import { Component, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { FormChecker } from '../form-checker';

@Component({
  selector: 'app-phenotype-form',
  templateUrl: './phenotype-form.component.html',
  styleUrls: ['./phenotype-form.component.css']
})
export class PhenotypeFormComponent implements OnInit {
	formChecker: FormChecker = new FormChecker;

	constructor(private formService: FormService){
		console.log('PhenotypeFormComponent loaded');
	}
	
	ngOnInit(){
		this.formService.getPhenotypes().subscribe(
			data => this.formChecker.checkboxes = data.data
		);
	}
}
