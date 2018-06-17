import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public table: any;

  public tableSubject: Subject<any> = new Subject<any>();
  public tableObservable: Observable<any>;

  constructor(private http: HttpClient) {
  this.tableObservable = this.tableSubject.asObservable();
    this.getCompanies();
  }


  ngOnInit() {
  }

  getCompanies(): void {
    this.http.get<any>('/api/company').subscribe((data) => {
      this.table = data;
      this.tableSubject.next(this.table);
    });
  }

  addCompany(obj) {
    return this.http.post<any>('/api/company', obj).subscribe((data) => {
      this.table = data;
      this.tableSubject.next(this.table);
    });
  }

  removeCompany(company){
    return this.http.delete<any>('/api/company/'+company.id, company).subscribe((data) => {
      this.table = data;
      this.tableSubject.next(this.table);
    });
  }

}









