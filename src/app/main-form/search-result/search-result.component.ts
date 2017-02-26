import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

	@Input() formValue: any;

	tableData: Object[];
	allData: Object;

	constructor(private searchService: SearchService) {
		this.searchService.getData().subscribe(
			data => {
				this.allData = data;
				this.handleData();
			}
		)

		this.tableData = [
			{
				values: []
			}
		]

		console.log(this.tableData);
	}

	handleData(){
		let cell = {
			values: []
		};

		for(let i = 0; i < this.allData['count']; i++){ // One cycle is one row
			cell.values[0] = this.allData['rows'][i][0]; // family id
			cell.values[1] = this.allData['rows'][i][1]; // study
			this.tableData.push(cell);
		}
	}

	ngOnInit() {
	}

}
