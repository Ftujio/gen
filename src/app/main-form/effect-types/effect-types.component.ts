import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-effect-types-form',
  templateUrl: './effect-types.component.html',
  styleUrls: ['../css/form.css', './effect-types.component.css'],
  outputs: ['effectTypesChanged']
})
export class EffectTypesComponent implements OnInit {

	effectTypesChanged = new EventEmitter<Object>();

	data;
	numOfChecked: number = 0;
	message: String;
	formLength: number = 0;

	constructor(private formService: FormService) {
		this.formService.getEffectTypes().subscribe(
			data => {
				this.data = data;
				//console.log(this.data);
				for(let a in this.data){
					this.formLength += this.data[a].data.length;
				}
			}
		);
	}

	ngOnInit() {
		
	}

	onSubmit(form: NgForm){
		console.log(form.value);
	}

	setMessage(form: NgForm){
		/*if(this.numOfChecked == 0){
			this.message = 'Check at least one checkbox';
		} else if(this.numOfChecked < this.data['length']){
			this.message = 'Check all the checkboxes';
		} else {
			this.message = 'All the checkboxes are checked';
		}*/

		if(this.numOfChecked == 0){
			this.message = 'Check at leas one checkbox';
		} else {
			this.message = '';
		}
	}

	checkStatus(form: NgForm){
		this.numOfChecked = 0;

		console.log(form.value);
		console.log('num: ', this.numOfChecked);

		for(let key in form.value){
			let value = form.value[key];
			//console.log("\"", key, "\"", ": \"", value, "\"");
			if(value == true){
				this.numOfChecked++;
			}
		}

		this.setMessage(form);
		this.effectTypesChanged.emit(form);
	}

	checkAll(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			if(value == false || value == undefined){
				form.controls[key].setValue(true);
				this.numOfChecked++;
			}
		}

		this.setMessage(form);
		this.effectTypesChanged.emit(form);
	}

	checkNone(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			if(value == true){
				form.controls[key].setValue(false);
				this.numOfChecked--;
			}
		}

		this.setMessage(form);
		this.effectTypesChanged.emit(form);
	}

}
