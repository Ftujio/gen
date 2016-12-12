import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PhenotypeComponent }  from './phenotype.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PhenotypeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
