import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-owed',
  templateUrl: './owed.component.html',
  styleUrls: ['./owed.component.scss']
})
export class OwedComponent {
  amount: number = 0;
  person: string = '';

  @Output() owingAdded = new EventEmitter<void>();

  constructor(private dataService: DataService) {}
  addOwing() {
    const owingData = { amount: Number(this.amount), person: this.person.trim() };
    console.log('Sending owing data:', owingData);
  
    if (owingData.amount > 0 && owingData.person) {
      this.dataService.addOwing(owingData).subscribe(data => {
        console.log('Owing added:', data);
        this.owingAdded.emit();
      }, error => {
        console.error('Error adding owing:', error);
      });
    } else {
      console.error('Invalid owing data');
    }
  }
  
  
  
}
