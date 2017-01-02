export class FormControl{
	message: string = "Check at least one checkbox!";
	numOfChecked: number = 0;
	checkboxes = [];
	isChecked;

	constructor(){
		console.log("FromControl loaded");
	}

	noneButtonState() {
		if(this.checkboxes != undefined){
			return !this.checkboxes.some(_ => _.state);
		}
	}

	allButtonState() {
		//return this.checkboxes.some(_ => _.state);
	}

	checkInputs(a: boolean = false): string {
		this.numOfChecked = 0;

		var num = this.checkboxes.length;

		for(let cb of this.checkboxes){
			if(cb.state == true) {
				this.numOfChecked++;
			}

			if(a && cb.state != true){
				cb.state = true;
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
	cbState(a:string = null){
		if(this.checkInputs() == 'some'){
			this.message = "Check at least one checkbox!";
		} else if(this.checkInputs() == 'all'){
			this.message = "All of them are checked!";
		} else {
			this.message = "Check all the checkboxes!"
		}

		console.log("Found ", this.numOfChecked, " checkboxes checked.");
	}

	checkAll(){
		console.log('pressed all button!');
		this.checkInputs(true);
		this.cbState();
	}

	checkNone(){
		console.log('pressed none button!');
	}
}