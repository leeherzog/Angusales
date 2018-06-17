import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CostumersComponent } from './costumers/costumers.component';
import { CustomersService } from './table.service';
import {TableComponent} from './table/table.component'
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CompaniesComponent } from './companies/companies.component';
import { NewCompanyComponent } from './new-company/new-company.component';

const routes: Routes = [
  { path: '', component: TableComponent},
  { path: 'customers', component: CostumersComponent},
  { path: 'customers/newCustomer', component: NewCustomerComponent},
  { path: 'companies', component: CompaniesComponent},
  { path: 'companies/newCompany', component: NewCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
