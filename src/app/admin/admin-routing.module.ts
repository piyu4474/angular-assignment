import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [ 
  {path:'', 
  component: AdminComponent,
  children:[
    {
      path: 'header',
      component: HeaderComponent
    },
    {
      path: 'sidebar',
      component: SidebarComponent
    },
    {
    path: '',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  }
  ]
 },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
