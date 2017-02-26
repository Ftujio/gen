import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { FormGroupComponent } from './form-group/form-group.component';
import { PhenotypeFormComponent } from './phenotype-form/phenotype-form.component';
import { EffectTypesFormComponent } from './effect-types-form/effect-types-form.component';
import { PresentInChildFormComponent } from './present-in-child-form/present-in-child-form.component';
import { PresentInParentFormComponent } from './present-in-parent-form/present-in-parent-form.component';

// Services
import { FormService } from './services/form.service';
import { ChildGenderComponent } from './child-gender/child-gender.component';
import { VariantTypesComponent } from './variant-types/variant-types.component';
import { StudyTypesComponent } from './study-types/study-types.component';
import { GeneFormComponent } from './gene-form/gene-form.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
	imports: [
		CommonModule, FormsModule
	],
	declarations: [
		FormGroupComponent,
		PhenotypeFormComponent,
		EffectTypesFormComponent,
		PresentInChildFormComponent,
		PresentInParentFormComponent,
		ChildGenderComponent,
		VariantTypesComponent,
		StudyTypesComponent,
		GeneFormComponent,
		SearchResultComponent
	],
	providers: [ FormService ],
	exports: [ FormGroupComponent,  ]
})
export class MainFormModule { }
