import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms'; '@angular/core'
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from './modals/modal.module';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule,
    TableModule,
  ]
})
export class FormModule { }
