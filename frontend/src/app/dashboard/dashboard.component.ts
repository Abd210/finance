import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() cash: number = 0;
  @Input() income: number = 0;
  @Input() expenses: any[] = [];
  @Input() budget: number = 0; // Add budget as an input
  @Input() savings: number = 0;
  @Input() owing: any[] = [];


  totalOwing: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getBudget();
    this.getAmount();
    this.getExpenses();
    this.getSavings();
    this.getOwing();
  }

  getBudget() {
    this.dataService.getBudget().subscribe(
      data => {
        this.budget = data.dailyBudget;
      },
      error => {
        console.error('Error fetching budget:', error);
      }
    );
  }

  getAmount() {
    this.dataService.getAmount().subscribe(
      data => {
        this.income = data.income;
        this.cash = data.cash;
      },
      error => {
        console.error('Error fetching amount:', error);
      }
    );
  }

  getExpenses() {
    this.dataService.getExpense().subscribe(
      data => {
        this.expenses = data.expenses;
      },
      error => {
        console.error('Error fetching expenses:', error);
      }
    );
  }

  getSavings() {
    this.dataService.getSavings().subscribe(
      data => {
        this.savings = data.saving;
      },
      error => {
        console.error('Error fetching savings:', error);
      }
    );
  }

  getOwing() {
    this.dataService.getOwing().subscribe(
      data => {
        this.owing = data.owing;
        this.totalOwing = data.totalOwing;
      },
      error => {
        console.error('Error fetching owing:', error);
      }
    );
  }
}
