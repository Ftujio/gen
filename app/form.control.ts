export class FormControl{
	message: string = "Check at least one checkbox!";
	numOfChecked: number = 0;
	checkboxes = [];
	isChecked;

	constructor(){
		console.log("FormControl loaded");
	}

	noneButtonState() {
		if(this.checkboxes != undefined){
			return !this.checkboxes.some(_ => _.state);
		}
	}

	allButtonState():boolean {
		if(this.numOfChecked != this.checkboxes.length){
			return false;
		} else {
			return true;
		}
	}

	checkInputs(a: boolean = false, b: boolean = false): string {
		this.numOfChecked = 0;

		var num = this.checkboxes.length;

		for(let cb of this.checkboxes){
			if(cb.state == true) {
				this.numOfChecked++;
			}

			if(a && cb.state != true){
				cb.state = true;
			} else if(b && cb.state == true){
				cb.state = false;
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

		//console.log("Found ", this.numOfChecked, " checkboxes checked.");
	}

	checkAll(){
		this.checkInputs(true);
		this.cbState();
	}

	checkNone(){
		this.checkInputs(false, true);
		this.cbState();
	}
}