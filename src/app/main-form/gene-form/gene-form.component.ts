import { Component, Input, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gene-form',
  templateUrl: './gene-form.component.html',
  styleUrls: ['./gene-form.component.css']
})
export class GeneFormComponent implements OnInit {

	@Input() formValue: any;

	constructor(){}

	ngOnInit(){}

	onSubmit(form: NgForm){
		
	}

}
