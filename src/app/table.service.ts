import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  public table: any;

  public tableSubject: Subject<any> = new Subject<any>();
  public tableObservable: Observable<any>;

  constructor(private http: HttpClient) {
  this.tableObservable = this.tableSubject.asObservable();
    this.getCustomers();
  }


  ngOnInit() {
  }

  getCustomers(): void {
    this.http.get<any>('/api/customer').subscribe((data) => {
      this.table = data;
      this.tableSubject.next(this.table);
    });
  }

  addCustomers(obj) {
    return this.http.post<any>('/api/customer', obj).subscribe((data) => {
      this.table = data;
      this.tableSubject.next(this.table);
    });
  }

  removeCustomer(customer){
    return this.http.delete<any>('/api/customer/'+customer.email, customer).subscribe((data) => {
      this.table = data;
      this.tableSubject.next(this.table);
    });
  }

}









