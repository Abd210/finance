import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent {
  saving: number = 0;
  amount: number=0;
  @Output() savingsAdded = new EventEmitter<void>();

  constructor(private dataService: DataService) {}
  getSavings() {
    this.dataService.getSavings().subscribe(data => {
      this.saving = data.saving; // Update the saving variable
    }, error => {
      console.error('Error fetching savings:', error);
    });
  }
  
  addSaving() {
    if (this.saving > 0) {
      this.dataService.addSaving(this.saving).subscribe(data => {
        console.log('Saving added, emitting event');
        this.savingsAdded.emit(); // Emit event to notify parent component
      }, error => {
        console.error('Error adding saving:', error);
      });
    } else {
      console.error('Saving value is invalid');
    }
  }
  
  
}
