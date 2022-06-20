import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerRoutingModule } from './customer/customer-routing.module';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  exports:[
    HeaderComponent,
    SidebarComponent
  ]
  
})
export class AdminModule { }
  