import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import {CustomersService} from '../table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
public table: Array <any>;
displayedColumns = ['firstName', 'lastName', 'company', 'phone'];
dataSource =  new MatTableDataSource(this.customersService.table);

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}

constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customersService.tableObservable.subscribe((data) => {
      this.table = data;
      this.dataSource =  new MatTableDataSource(this.table);
    })
  }

}

// export interface Element {
//   firstName: string;
//   lastName: string;
//  company: string;
//  phone: number;
// }

// const table: Element[] =[
//   {firstName: "Lee", lastName: "Herzog", company: "KHealth", phone: 584424049},
//   {firstName: "J", lastName: "Herzog", company: "Law", phone: 584424049},
// ]

  
  



// public tableSubject: Subject<any> = new Subject <any>();
// public tableObservable: Observable<any>;

  // constructor(private http : HttpClient) { }
  // this.tableObservable = this.tableSubject.asObservable();
  // this.getTable();

  

//   ngOnInit() {
//   }

//   // getTable(): void {
//   //   this.http.get<any>('/customer').subscribe((data) => {
//   //     this.table = data;
//   //      this.tableSubject.next(this.table);
//   // });
// // }

// }
