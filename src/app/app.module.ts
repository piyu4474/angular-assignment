import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { AddComponent } from './admin/customer/add/add.component';
import { DeleteComponent } from './admin/customer/delete/delete.component';
import { EditComponent } from './admin/customer/edit/edit.component';
import { ListComponent } from './admin/customer/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
   AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
     
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
