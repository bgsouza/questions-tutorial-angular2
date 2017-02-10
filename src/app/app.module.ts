// Dependências do Angular 2
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Nosso component
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';

// Adicionamos o arquivo routing
import { routing } from './app.routing';

// Inclui nossos components
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionService } from './questions/shared/question.service';

// Adicionamos em imports a contant routing e também nosso service em Providers
@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
