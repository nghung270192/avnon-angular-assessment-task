import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogConfig} from "@angular/cdk/dialog";
import {
  AddNewQuestionDialogComponent,
  AddNewQuestionDialogData
} from "./add-new-question-dialog/add-new-question-dialog.component";
import {IQuestion} from "../../../models/shared.model";

@Component({
  selector: 'app-builder',
  templateUrl: './builder-form.component.html',
  styleUrl: './builder-form.component.scss'
})
export class BuilderFormComponent {

  formGroup: FormGroup;
  questions: Array<IQuestion> = []

  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private cd: ChangeDetectorRef) {
    this.formGroup = formBuilder.group({})
  }

  addNewQuestion() {
    const dialogConfig: MatDialogConfig<AddNewQuestionDialogData> = {
      data: {}
    }
    this.dialog.open<AddNewQuestionDialogComponent, any, IQuestion>(AddNewQuestionDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(question => {
        console.log(question);
        if (question) {
          this.questions.push(question);
          this.cd.detectChanges();
        }
      })
  }
}
