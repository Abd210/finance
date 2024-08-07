import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss']
})
export class CashComponent {
  cashAmount: number = 0;

  @Output() cashAdded = new EventEmitter<void>();

  constructor(private dataService: DataService) {}

  addCash() {
    if (this.cashAmount > 0) {
      this.dataService.addCash(this.cashAmount).subscribe(
        response => {
          this.cashAmount = 0;
          this.cashAdded.emit(); // Emit event to notify parent component
        },
        error => {
          console.error('Error adding cash:', error);
        }
      );
    } else {
      console.error('Cash amount should be greater than 0');
    }
  }
}
