import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
// import { FlexLayoutModule } from '@angular/flex-layout';

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
      UsersComponent,

        HomeComponent,
    ],
    imports: [
        CommonModule,
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
    ]
})
export class UsersModule { }
