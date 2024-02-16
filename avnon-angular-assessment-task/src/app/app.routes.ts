import {Routes} from '@angular/router';
import {BuilderFormComponent} from "./components/common-form/builder-form/builder-form.component";
import {AnswersFormComponent} from "./components/common-form/answers-form/answers-form.component";

export const routes: Routes = [

  {path: "", component: BuilderFormComponent},
  {path: "form/builder", component: BuilderFormComponent},
  {path: "form/answers", component: AnswersFormComponent}
];
