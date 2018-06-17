import { Component, OnInit } from '@angular/core';
import {CompanyService } from '../company.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
id: number;
name: string;
address: string;
country: string;
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  submitCompany(){
    this.companyService.addCompany({"id": this.id, "name": this.name, "address": this.address, "country": this.country});
  }
}
