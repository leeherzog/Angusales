import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  public table: Array <any>;
  displayedColumns = ['id', 'name', 'address', 'country', 'actions'];
  dataSource =  new MatTableDataSource(this.companyService.table);
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.tableObservable.subscribe((data) => {
      this.table = data;
      this.dataSource =  new MatTableDataSource(this.table);
    })
  }


deleteCompany(company){
  this.companyService.removeCompany(company);
}
 
}
