import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gene-form',
  templateUrl: './gene-form.component.html',
  styleUrls: ['./gene-form.component.css']
})
export class GeneFormComponent implements OnInit {

	constructor(){
		
	}

	ngOnInit(){}

	onSubmit(form: NgForm){
		console.log(form);
		console.log(form.value);
		console.log(form.controls['all'].value);
	}

}
