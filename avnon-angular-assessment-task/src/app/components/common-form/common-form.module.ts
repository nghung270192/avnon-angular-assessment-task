import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuilderFormComponent} from "./builder-form/builder-form.component";
import {AddNewQuestionDialogComponent} from "./builder-form/add-new-question-dialog/add-new-question-dialog.component";
import {MatButton} from "@angular/material/button";
import {DialogModule} from "@angular/cdk/dialog";
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FlexLayoutServerModule} from "@angular/flex-layout/server";
import {MatCheckbox} from "@angular/material/checkbox";


@NgModule({
  declarations: [BuilderFormComponent,
    AddNewQuestionDialogComponent],
  imports: [
    CommonModule,
    DialogModule,
    MatButton,
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardSubtitle,
    MatCardTitle,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatLabel,
    MatOption,
    MatInput,
    FlexLayoutServerModule,
    FlexLayoutModule,
    MatCheckbox
  ],
  exports: [
    BuilderFormComponent
  ]
})
export class CommonFormModule {
}
