import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PhenotypeComponent }  from './phenotype.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PhenotypeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
