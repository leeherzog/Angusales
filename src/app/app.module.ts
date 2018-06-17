import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {CustomersService} from './table.service';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule }   from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material';
import { CostumersComponent } from './costumers/costumers.component';

import {AppRoutingModule} from './/app-routing.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyService } from './company.service';
import { NewCompanyComponent } from './new-company/new-company.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CostumersComponent,
    NewCustomerComponent,
    CompaniesComponent,
    NewCompanyComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers: [CustomersService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
