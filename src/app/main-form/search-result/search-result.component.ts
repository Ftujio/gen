import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

	@Input() formValue: any;

	tableData: Object;
	allData: JSON;

	constructor(private searchService: SearchService) {
		this.searchService.getData().subscribe(
			data => {
				this.allData = data;
			}
		)
	}

	ngOnInit() {
	}

}
