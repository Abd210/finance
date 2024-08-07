import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from './services/data.service';
import { emit } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  budget: any;
  amount: any;
  cash: number = 0;
  expenses: any[] = [];
  saving: number = 0;
  income: number = 0;
  owing: any[] = [];

  showIncomeForm = false;
  showCashForm = false;
  showExpensesForm = false;
  showSavingsForm = false;
  showOwedForm = false;

  @Output() cashAdded = new EventEmitter<void>();
  @Output() expenseAdded = new EventEmitter<void>();
  @Output() savingAdded = new EventEmitter<void>();
  @Output() incomeAdded = new EventEmitter<void>();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getBudget();
    this.getAmount();
    this.getExpenses(); // Ensure expenses are fetched on init
  }

  getBudget() {
    this.dataService.getBudget().subscribe(data => {
      this.budget = data.dailyBudget; // Make sure this matches your data structure
    }, error => {
      console.error('Error fetching budget:', error);
    });
  }
  

  addIncome() {
    if (this.income) {
      this.dataService.addIncome(this.income).subscribe(data => {
        this.getBudget(); // Refresh budget after adding income
        this.incomeAdded.emit(); // Emit event to notify parent component
      }, error => {
        console.error('Error adding income:', error);
      });
    } else {
      console.error('Income value is invalid');
    }
  }

  getAmount() {
    this.dataService.getAmount().subscribe(data => {
      this.amount = data;
      this.cash = data.cash;
      this.income = data.income;
      this.saving = data.saving;  // Ensure saving is updated
    }, error => {
      console.error('Error fetching amount:', error);
    });
  }
  

  getExpenses() {
    this.dataService.getExpense().subscribe(data => {
      this.expenses = data.expenses;
    }, error => {
      console.error('Error fetching expenses:', error);
    });
  }

  // Other methods for adding and fetching data
  getSavings() {
    this.dataService.getSavings().subscribe(data => {
      this.saving = data.saving; // Update the saving variable
      console.log('Updated savings:', this.saving);
    }, error => {
      console.error('Error fetching savings:', error);
    });
  }
  
  addSaving() {
    if (this.saving > 0) {
      this.dataService.addSaving(this.saving).subscribe(data => {
        console.log('Saving added, emitting event');
      }, error => {
        console.error('Error adding saving:', error);
      });
    } else {
      console.error('Saving value is invalid');
    }
  }
  


  getOwing() {
    this.dataService.getOwing().subscribe(data => {
      this.owing = data.owing; // Make sure this is an array from your backend
    }, error => {
      console.error('Error fetching owing:', error);
    });
  }
  

  

  showForm(formType: string) {
    this.resetForms();
    switch(formType) {
      case 'income':
        this.showIncomeForm = true;
        break;
      case 'cash':
        this.showCashForm = true;
        break;
      case 'expenses':
        this.showExpensesForm = true;
        break;
      case 'savings':
        this.showSavingsForm = true;
        break;
      case 'owed':
        this.showOwedForm = true;
        break;
    }
  }

  resetForms() {
    this.showIncomeForm = false;
    this.showCashForm = false;
    this.showExpensesForm = false;
    this.showSavingsForm = false;
    this.showOwedForm = false;
  }

  onCashAdded() {
    // Fetch updated data when cash is added
    this.getBudget();
    this.getAmount();
  }
  

  onExpenseAdded() {
    this.getExpenses(); // Refresh the expenses list when an expense is added
  }
  onIncomeAdded() {
    this.getBudget(); // Refresh the budget when income is added
    this.getAmount(); // Refresh other relevant data
  }
  onSavingsAdded() {
    console.log('onSavingsAdded triggered, refreshing savings');
    this.getSavings(); // Refresh the savings data
    this.getAmount();  // Update other relevant data
  }
  onOwingAdded() {
    this.getOwing(); // Refresh the owing data when a new owing is added
  }
  
  
  
  
  
}
