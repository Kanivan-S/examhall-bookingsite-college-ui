import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [SidenavComponent,HeaderComponent],
  imports: [ RouterModule, FormsModule,MatMenuModule,CommonModule,MatToolbarModule,MatIconModule,MatDividerModule,MatListModule],
  exports: [SidenavComponent,HeaderComponent],
})
export class SharedModule {}
