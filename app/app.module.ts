import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';	

import { AppComponent }  from './app.component';
import { PhenotypeFormComponent } from './phenotype.form.component';
import { PhenotypesService } from './services/phenotypes.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule , HttpModule ],
  providers:    [ PhenotypesService ],
  declarations: [ AppComponent, PhenotypeFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
