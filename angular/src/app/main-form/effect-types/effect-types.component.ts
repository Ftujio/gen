import { Component, EventEmitter, OnInit, Input } from '@angular/core';

import { FormService } from '../services/form.service';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-effect-types-form',
  templateUrl: './effect-types.component.html',
  styleUrls: ['../css/form.css', './effect-types.component.css'],
  outputs: ['validityChanged']
})
export class EffectTypesComponent implements OnInit {

	validityChanged = new EventEmitter<string>();

	@Input() formValue: any;
	data: Object;
	message: String;
	formLength: number = 0;

	form: FormGroup;

	constructor(private formService: FormService, public fb: FormBuilder) {
		this.formService.getEffectTypes().subscribe(
			data => {
				this.data = data.data;
				//console.log(this.data);
			}
		);

		this.form = this.fb.group({
			checkboxes: this.fb.group({
				nonsense: [''],
				'frame-shift': [''],
				'splice-site': [''],
				missense: [''],
				'non-frame-shift': [''],
				'no-start': [''],
				'no-end': [''],
				synonymous: [''],
				'non-coding': [''],
				intron: [''],
				intergenic: [''],
				'3-UTR': [''],
				'5-UTR': [''],
				'CNV+': [''],
				'CNV-': [''],
			}, {validator: this.checkboxRequired})
		});
	}

	checkboxRequired(group: FormGroup){
		let valid = false;

  		for (let name in group.controls) {
  			let val = group.controls[name].value;
			if (val) {
				valid = true;
				break;
			}
		}

		if (valid) {
			return null;
		}

		return {
			checkboxRequired: true
		};
	}

	ngOnInit() {
	}

	onSubmit(){
		console.log('form submited!');
		console.log(this.form);
	}

	setMessage(){
		if(this.form.status == 'VALID'){
			this.message = '';
		} else {
			this.message = 'At lest one is required!';
		}

		this.formValue['effect-types'] = this.form.value['checkboxes'];

		this.validityChanged.emit(this.form.status);
	}

	checkAll(){
		for(let key in this.form.value.checkboxes){
			let value = this.form.value.checkboxes[key];
			if(value == ''){
				this.form.controls['checkboxes']['controls'][key].setValue(true);
			}
		}

		this.setMessage();
	}

	checkNone(){
		for(let key in this.form.value.checkboxes){
			let value = this.form.value.checkboxes[key];
			if(value){
				this.form.controls['checkboxes']['controls'][key].setValue(false);
			}
		}

		this.setMessage();
	}

}
