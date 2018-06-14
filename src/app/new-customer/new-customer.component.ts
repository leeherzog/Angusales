import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../table.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
firstName: string;
lastName: string;
company: string;
email: string;
phone: number;
  constructor(private customersService: CustomersService) { }

  ngOnInit() {
  }

  submitCustomer(){
    this.customersService.addCustomers({"firstName": this.firstName, "lastName": this.lastName, "company_ID": this.company, "email": this.email, "phone": this.phone});
  }
}
