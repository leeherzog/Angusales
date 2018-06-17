import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import { CustomersService } from '../table.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.component.html',
  styleUrls: ['./costumers.component.css']
})
export class CostumersComponent implements OnInit {
  public table: Array <any>;
  displayedColumns = ['firstName', 'lastName', 'company', 'email', 'phone', 'actions'];
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
      console.log(this.dataSource)
    })
  }


deleteCustomer(customer){
  console.log("Here");
  this.customersService.removeCustomer(customer);
}
 
excel() {
  var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    useBom: true,
    noDownload: false,
    headers: ["First Name", "Last Name", "Company", "Email", "Phone"]};
   new Angular5Csv(this.table, 'My Report', options);
  }

}
