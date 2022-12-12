import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectionList } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {  MatInputModule } from '@angular/material/input';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HistoryComponent } from './history/history.component';
import { RejectHistoryComponent } from './reject-history/reject-history.component';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
    declarations: [
      UsersComponent,
      DashboardComponent,

        HomeComponent,

        HistoryComponent,

        RejectHistoryComponent,
    ],
    imports: [
        CommonModule,
        MatDividerModule,
        SharedModule,
        MatStepperModule,
        UsersRoutingModule,
        MatGridListModule,
        CdkStepperModule,
        MatSidenavModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBadgeModule,

        MatButtonModule,
        MatTabsModule,
        MatOptionModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
          CommonModule,
          NgxMaterialTimepickerModule,
          SharedModule,
          MatTooltipModule,
          MatStepperModule,
          MatGridListModule,
          MatCardModule,
          MatInputModule,
          CdkStepperModule,
          MatSidenavModule,
          ReactiveFormsModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MatBadgeModule,
          MatSelectModule,
    ]
})
export class UsersModule { }
