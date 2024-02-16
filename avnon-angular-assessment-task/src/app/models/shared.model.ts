export enum QuestionType {
  paragraph = "paragraph",
  checkList = "checkList"
}

export const QuestionTypeLabelMapping: Record<QuestionType, string> = {
  [QuestionType.paragraph]: 'Paragraph',
  [QuestionType.checkList]: 'Check List',
};

export interface ICheckListAnswer {
  optionName: string;
  checked: boolean;
}

export interface IQuestion<T = String | Array<ICheckListAnswer | any>> {
  questionType: QuestionType;
  question: string;
  answers: T;
  isRequest: boolean;
  isAllowSpecifyAnswer: boolean;
}
