import {Component, Inject, OnInit} from '@angular/core';
import {DIALOG_DATA} from "@angular/cdk/dialog";
import {MatDialogRef} from "@angular/material/dialog";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {ICheckListAnswer, IQuestion, QuestionType, QuestionTypeLabelMapping} from "../../../../models/shared.model";

export interface AddNewQuestionDialogData {

}

@Component({
  selector: 'app-add-new-question-dialog',
  templateUrl: './add-new-question-dialog.component.html',
  styleUrl: './add-new-question-dialog.component.scss'
})
export class AddNewQuestionDialogComponent implements OnInit {

  formGroup: FormGroup;
  QuestionType = Object.values(QuestionType);
  QuestionTypes = QuestionType;
  QuestionTypeLabelMapping = QuestionTypeLabelMapping;

  checkListAnswers: Array<ICheckListAnswer> = [];


  constructor(@Inject(DIALOG_DATA) private data: AddNewQuestionDialogData,
              private dialogRef: MatDialogRef<AddNewQuestionDialogComponent>,
              private fb: FormBuilder) {
    this.formGroup = fb.group({
      questionType: [QuestionType.checkList, [Validators.required]],
      question: ["Type question here", [Validators.required]],
      answers: this.fb.array([]),
      isRequest: [false],
      isAllowSpecifyAnswer: [false],
    });


  }


  ngOnInit(): void {
  }

  submit() {
    if (this.formGroup.get("questionType")?.value === QuestionType.paragraph) {
      const resutl: IQuestion<string> = {
        questionType: QuestionType.paragraph,
        question: this.formGroup.get("question")?.value,
        answers: "",
        isRequest: this.formGroup.get("isRequest")?.value,
        isAllowSpecifyAnswer: this.formGroup.get("isAllowSpecifyAnswer")?.value,
      }
      this.dialogRef.close(resutl);
    } else if (this.formGroup.get("questionType")?.value === QuestionType.checkList) {
      const resutl: IQuestion<Array<ICheckListAnswer>> = {
        questionType: QuestionType.paragraph,
        question: this.formGroup.get("question")?.value,
        answers: this.formGroup.get("answers")?.value as Array<ICheckListAnswer>,
        isRequest: this.formGroup.get("isRequest")?.value,
        isAllowSpecifyAnswer: this.formGroup.get("isAllowSpecifyAnswer")?.value,
      }

      this.dialogRef.close(resutl);
    }
  }

  get answers() {
    return this.formGroup.controls["answers"] as FormArray;
  }

  // Function to add a new answer option
  addAnswerOption() {
    const answersForm = this.fb.group({
      optionName: new FormControl('', [Validators.required]),
      checked: new FormControl(false)
    });
    this.answers.push(answersForm);

  }

}
