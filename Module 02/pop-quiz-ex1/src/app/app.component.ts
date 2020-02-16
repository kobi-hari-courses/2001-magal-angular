import { THE_QUESTION } from './models/the-questions';
import { Component } from '@angular/core';
import { Question } from './models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly question: Question = THE_QUESTION;
  isAnswerSelected: boolean = false;
  isAnswerCorrect: boolean | null = null;
  selectedAnswerIndex: number | null = null;

  selectAnswer(index: number) {
    if (!this.isAnswerSelected) {
      this.isAnswerSelected = true;
      this.isAnswerCorrect = (index === this.question.correctAnswerIndex);
      this.selectedAnswerIndex = index;  
    }
  }

  reset () {
    this.isAnswerSelected = false;
    this.isAnswerCorrect = null;
    this.selectedAnswerIndex = null;
  }

}
