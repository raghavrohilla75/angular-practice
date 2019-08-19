import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { CustomersComponent }  from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  exports:      [ CustomersComponent ] // it makes sure that anyone imports this module can access this component.
})
export class CustomersModule { }