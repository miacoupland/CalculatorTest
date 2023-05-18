import { Component } from '@angular/core';
import { CalculatorRepository } from 'src/app/persistence/calculator.repository';

@Component({
  selector: 'simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.scss'],
})
export class SimpleCalculatorComponent {
  public input: string = '0';
  public savedNum: number = 0;
  public operator: string = '';

  constructor(private repository: CalculatorRepository) {}

  /**
   * Handles all number buttons, registering clicks to display
   * @param num user's number input
   */
  public clickNum(num: number): void {
    if (this.input === '0') {
      this.input = num.toString();
    } else {
      this.input = `${this.input}${num}`;
    }
  }

  /**
   * Retrieves user's requested operator
   * @param operator Plus or minus operator
   */
  public getOperator(operator: string): void {
    this.savedNum = this.cleanValue(this.input);
    this.operator = operator;
    this.input = `${this.operator}`;
  }

  /**
   * Determines what kind of operation to make based on most recent operator
   */
  public calculate(): void {
    switch (this.operator) {
      case '+':
        this.add(this.savedNum, this.cleanValue(this.input));
        break;
      case '-':
        this.subtract(this.savedNum, this.cleanValue(this.input));
        break;
      default:
        break;
    }
  }

  /**
   * Clean input value to remove non numbers
   * @param val value to be cleaned
   * @returns number input
   */
  private cleanValue(val: string): number {
    return parseFloat(val.replace(/\D/g, ''));
  }

  /**
   * Requests addition of two values
   * @param start Starting value
   * @param amount Amount to add to starting value
   */
  public add(start: number, amount: number): void {
    this.repository
      .add(start, amount)
      .subscribe((num) => (this.input = num.toString()));
  }

  /**
   * Requests subtraction of a value
   * @param start Starting value
   * @param amount Amount to subtract from starting value
   */
  public subtract(start: number, amount: number): void {
    this.repository
      .subtract(start, amount)
      .subscribe((num) => (this.input = num.toString()));
  }

  /**
   * Clears display and resets inputs
   */
  public clear(): void {
    this.input = '0';
    this.operator = '';
  }
}
