import { Component, Input, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.css']
})
export class GeneComponent implements OnInit {

	@Input() formValue: any;

	constructor(){}

	ngOnInit(){}

	onSubmit(form: NgForm){
		
	}

}
