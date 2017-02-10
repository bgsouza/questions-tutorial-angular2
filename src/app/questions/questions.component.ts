import { Component, OnInit } from '@angular/core';

// Importa nosso Service
import { QuestionService } from './shared/question.service';

// Importa nosso model
import {Question} from "./shared/question";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

  private questions: Question[] = [];
 
  constructor(private questionService: QuestionService) { }
 
  // Pega a listagem de Questions ao iniciar
  ngOnInit() {
    this.questionService.getQuestions()
      .subscribe(data => this.questions = data);
  }
 
  // Apaga a questão
  deleteQuestion(questions) {
    if (confirm("Você tem certeza que quer deletar a questions " + questions.title + "?")) {
      var index = this.questions.indexOf(questions);
      this.questions.splice(index, 1);
 
      this.questionService.deleteQuestion(questions.id)
        .subscribe(null);
    }
  }

}
