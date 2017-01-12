import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhenotypeFormComponent } from './phenotype-form/phenotype-form.component';
import { PresentInChildFormComponent } from './present-in-child-form/present-in-child-form.component';
import { PresentInParentFormComponent } from './present-in-parent-form/present-in-parent-form.component';
import { EffectTypesFormComponent } from './effect-types-form/effect-types-form.component';
import { FormService } from './services/form.service';

@NgModule({
	declarations: [
    	AppComponent,
    	PhenotypeFormComponent,
    	PresentInChildFormComponent,
    	PresentInParentFormComponent,
    	EffectTypesFormComponent
  	],
  	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [ FormService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
