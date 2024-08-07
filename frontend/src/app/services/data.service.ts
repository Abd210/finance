import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3001'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getBudget(): Observable<any> {
    return this.http.get(`${this.apiUrl}/budget`);
  }

  addIncome(income: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addIncome`, { income });
  }

  getAmount(): Observable<any> {
    return this.http.get(`${this.apiUrl}/amount`);
  }
  addCash(cash: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addCash`, { cash });
  
  }
  getExpense(): Observable<any> {
    return this.http.get(`${this.apiUrl}/expense`);
  
  }
  
addExpense(expense: { sum: number; purpose: string; category: string; date: Date; }): Observable<any> {
  return this.http.post(`${this.apiUrl}/addExpense`, expense);

}

  getSavings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/savings`);
  }
  addSaving(saving: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addSaving`, { saving });
  }
  getOwing(): Observable<any> {
    return this.http.get(`${this.apiUrl}/owing`);
  }
  addOwing(owingData: { amount: number; person: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/addOwing`, { owingData });
  }
  // Similarly, create methods for addCash, addExpense, addSaving, addOwing, getAmount, getExpense, getSavings, getOwing
}
