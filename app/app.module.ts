import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';	

import { AppComponent }  from './app.component';
import { PhenotypeFormComponent } from './phenotype.form.component';
import { PresentInChildFormComponent } from './present.in.child.form.component';
import { PresentInParentFormComponent } from './present.in.parent.form.component';

import { FormService } from './services/form.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule , HttpModule ],
  providers:    [ FormService ],
  declarations: [ AppComponent, PhenotypeFormComponent, PresentInChildFormComponent, PresentInParentFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
