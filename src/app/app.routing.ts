import { ModuleWithProviders } from '@angular/core';
// Importa o modulo de rotas do Angular 2
import { Routes, RouterModule }   from '@angular/router';
 
// Importa seus componentes criados
import { QuestionsComponent } from './questions/questions.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
 
 
// Cria nossas Rotas
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: QuestionsComponent },
  { path: 'questions/new', component: QuestionFormComponent},
  { path: 'questions/:id', component: QuestionFormComponent},
  { path: 'questions/:id/edit', component: QuestionFormComponent}
];
 
// Exporta a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);