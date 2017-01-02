export class FormControl{
	message: string = "Check at least one checkbox!";
	numOfChecked: number = 0;
	checkboxes = [];

	constructor(){
		console.log("Loaded form control");
	}

	noneButtonState() {
		if(this.checkboxes != undefined){
			return !this.checkboxes.some(_ => _.state);
		}
	}

	allButtonState() {
		//return this.checkboxes.some(_ => _.state);
	}

	checkInputs(): string {
		this.numOfChecked = 0;

		var num = this.checkboxes.length;

		for(let cb of this.checkboxes){
			if(cb.state == true) {
				this.numOfChecked++;
			}
		}

		if(this.numOfChecked == 0){
			return 'some';
		} else if(this.numOfChecked == num){
			return 'all';
		} else {
			return 'none';
		}
	}

	// Prints the state of the form to the view
	cbState(){
		if(this.checkInputs() == 'some'){
			this.message = "Check at least one checkbox!";
		} else if(this.checkInputs() == 'all'){
			this.message = "All of them are checked!";
		} else {
			this.message = "Check all the checkboxes!"
		}

		//console.log("Found ", this.numOfChecked, " checkboxes checked.");
	}

	checkAll(){
		console.log('pressed all button!');
		if(this.checkInputs() != 'all'){

		}
	}

	checkNone(){
		console.log('pressed none button!');
	}
}