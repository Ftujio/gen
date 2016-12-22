import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';	

import { AppComponent }  from './app.component';
import { PhenotypeComponent }  from './phenotype.component';
import { PhenotypeFormComponent } from './phenotype.form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule , HttpModule ],
  declarations: [ AppComponent, PhenotypeComponent, PhenotypeFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
