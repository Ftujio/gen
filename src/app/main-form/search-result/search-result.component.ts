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
			
		]
	}

	handleData(){
		for(let i = 0; i < this.allData['count']; i++){ // One cycle is one row
			let row = {	
				cells: [{values: []},{values: []},{values: []},{values: []},{values: []},{values: []}]
			}

			row.cells[0].values[0] = this.allData['rows'][i][0]; // family id
			row.cells[0].values[1] = this.allData['rows'][i][1]; // study

			row.cells[1].values[0] = this.allData['rows'][i][3]; // location
			row.cells[1].values[1] = this.allData['rows'][i][4]; // variant

			row.cells[2].values[0] = this.allData['rows'][i][8]; // worst effect type
			row.cells[2].values[1] = this.allData['rows'][i][9]; // genes

			row.cells[3].values[0] = this.allData['rows'][i][18]; // SSCfreq
			row.cells[3].values[1] = this.allData['rows'][i][19]; // EVSfreq
			row.cells[3].values[2] = this.allData['rows'][i][20]; // E65freq

			row.cells[4].values[0] = this.allData['rows'][i][22].split(":")[0]; // mom
			row.cells[4].values[1] = this.allData['rows'][i][22].split(":")[1]; // dad

			row.cells[5].values[0] = this.allData['rows'][i][24]; // proband verbal iq
			row.cells[5].values[1] = this.allData['rows'][i][25]; // proband non-verbal iq

			this.tableData.push(row);
		}
	}

	ngOnInit() {
	}

}
