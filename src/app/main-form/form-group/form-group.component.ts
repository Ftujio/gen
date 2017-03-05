import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {

	value: any;
	display: boolean = false;
	numOfValid: number = 0;
	trueDisplay: boolean = false;
	checked: Array<boolean> = [false, false, false, false, false];

	constructor() {
		this.value = {
			"genes": "",
			"phenotype": "",
			"child-gender": "",
			"variant-types": "",
			"study-types": "",
			"effect-types": "",
			"valid": ""
		};


	}

	handleValidity(valid, num){
		if(!this.checked[num-1]){
			this.checked[num-1] = true;

			if(valid == 'VALID'){
				this.numOfValid++;
				this.checked[num-1] = true;
			} else {
				this.numOfValid--;
				this.checked[num-1];
			}
		}

		if(this.checkNum(num)){
			this.numOfValid--;
		}

		this.checkAllValidity();
	}

	checkNum(num):boolean {
		let key: string;
		let empty: boolean = true;

		if(num == 1) key = 'phenotype';
		if(num == 2) key = 'child-gender';
		if(num == 3) key = 'variant-types';
		if(num == 4) key = 'study-types';
		if(num == 5) key = 'effect-types';

		//console.log('key: ', key);

		for(let data in this.value[key]){
			//console.log(data , ': ', this.value[key][data]);
			if(this.value[key][data] == true) {
				empty = false;
			}
		}

		console.log('empty: ', empty);

		return empty;
	}

	checkAllValidity(){
		if(this.numOfValid == 5){
			this.display = true;
		}

		console.log(this.numOfValid);
	}

	ngOnInit() {
	}

	submitForm(formValue){
		this.checkAllValidity();
		if(this.display){
			this.value['valid'] = true;
		}
		console.log(this.value);
	}

}
