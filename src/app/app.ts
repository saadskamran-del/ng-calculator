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
  // variable to store result
  result: string | undefined;

  addNumberValueToVariable(numberValue: number) {
    // code that needs to be executes
    console.log('Number clicked: ', numberValue);
    this.firstNumber = numberValue;
    this.result = this.firstNumber.toString();
  }
}
