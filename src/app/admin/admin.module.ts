import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from '../shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import { SharedModule } from '../shared/shared.moude';
import { HomeComponent } from './home/home.component';
import { AppModule } from "../app.module";
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations: [
        AdminComponent,

        HomeComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatStepperModule,
        AdminRoutingModule,
        MatGridListModule,
        CdkStepperModule,
        MatSidenavModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBadgeModule,
    ]
})
export class AdminModule { }
