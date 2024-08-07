import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  expenseAmount: number = 0;
  expensePurpose: string = '';
  expenseCategory: string = '';

  @Output() expenseAdded = new EventEmitter<void>();

  constructor(private dataService: DataService) {}

  addExpense() {
    if (this.expenseAmount > 0 && this.expensePurpose && this.expenseCategory) {
      const expense = {
        sum: this.expenseAmount,
        purpose: this.expensePurpose,
        category: this.expenseCategory,
        date: new Date()
      };
      this.dataService.addExpense(expense).subscribe(
        response => {
          console.log('Expense added successfully:', response);
          this.expenseAmount = 0;
          this.expensePurpose = '';
          this.expenseCategory = '';
          this.expenseAdded.emit(); // Emit event to notify parent component
        },
        error => {
          console.error('Error adding expense:', error);
        }
      );
    } else {
      console.error('All expense fields must be filled out');
    }
  }
}
