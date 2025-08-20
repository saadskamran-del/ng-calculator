import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('calculator');

  // variable to store first number
  firstNumber: number | undefined;
  // variable to store second number
  secondNumber: number | undefined;
  // variable to store operator
  operator: string | undefined;
  // variable to store history
  history: string | undefined;
  // variable to store result
  result: number | undefined;

  addNumberValueToVariable(numberValue: number) {
    // code that needs to be executes
    console.log('Number clicked: ', numberValue);
    // check if operator is already set
    if (this.operator) {
      // if operator is set, then it means we are entering the second number
      this.secondNumber = numberValue;
      this.history =
        this.firstNumber?.toString() + ' ' + this.operator + ' ' + this.secondNumber?.toString();
    } else {
      // if operator is not set, then we are entering the first number
      this.firstNumber = numberValue;
      this.history = this.firstNumber?.toString();
    }
    // this.firstNumber = numberValue;
    // this.history = this.firstNumber.toString();
  }

  addOperatorValueToVariable(operatorValue: string) {
    console.log('Operator clicked: ', operatorValue);
    this.operator = operatorValue;
    this.history = this.firstNumber?.toString() + ' ' + this.operator;
  }

  generateResult() {
    if (this.firstNumber && this.secondNumber && this.operator) {
      if (this.operator === '+') {
        this.result = this.firstNumber + this.secondNumber;
      }
    }
  }
}
