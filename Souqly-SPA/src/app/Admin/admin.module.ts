import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageWithdrawnRequestsComponent } from './manage-withdrawn-requests/manage-withdrawn-requests.component';
import { TableModule } from 'primeng/table';
import { UserDataComponent } from './user-data/user-data.component';
import {CardModule} from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManageWithdrawnRequestsComponent,
    UserDataComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ToastModule,
    DropdownModule,
    FormsModule
  ]
})
export class AdminModule { }
