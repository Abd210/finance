import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {
  income: number = 0;
  budget: any;
  
  @Output() incomeAdded = new EventEmitter<void>();

  constructor(private dataService: DataService) {}

  getBudget() {
    this.dataService.getBudget().subscribe(data => {
      this.budget = data.dailyBudget; // Make sure this matches your data structure
    }, error => {
      console.error('Error fetching budget:', error);
    });
  }

  addIncome() {
    if (this.income) { // Check if income is defined and valid
      this.dataService.addIncome(this.income).subscribe(data => {
        console.log('Income added:', data);
        this.getBudget(); // Refresh budget after adding income
        this.incomeAdded.emit(); // Emit event to notify parent component
      }, error => {
        console.error('Error adding income:', error);
      });
    } else {
      console.error('Income value is invalid');
    }
  }
}
