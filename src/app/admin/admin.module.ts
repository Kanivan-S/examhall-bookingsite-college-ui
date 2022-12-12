import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
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
import { AppModule } from "../app.module";
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
import { AdminHistoryComponent } from './admin-history/admin-history.component';
import { UsersStatusComponent } from './users-status/users-status.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        HomeComponent,
        AdminHistoryComponent,
        UsersStatusComponent,

    ],
    imports: [
      MatButtonModule,
      MatTabsModule,
      MatDividerModule,
      MatOptionModule,
      MatIconModule,
      MatTableModule,
      MatFormFieldModule,
        CommonModule,
        NgxMaterialTimepickerModule,
        SharedModule,
        MatTooltipModule,
        MatStepperModule,
        AdminRoutingModule,
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
export class AdminModule { }
