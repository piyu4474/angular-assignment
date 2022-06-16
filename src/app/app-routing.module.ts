import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './university/about-us/about-us.component';
import { HomeComponent } from './university/home/home.component';
import { StudentComponent } from './university/student/student.component';
import { TeacherComponent } from './university/teacher/teacher.component';

const routes: Routes = [
  
    {
      component: HomeComponent,
      path: 'home'
    },
    {
      component: AboutUsComponent,
      path: 'about-us'
    },
    {
    component: StudentComponent,
    path: 'student'
  },
  {
    component: TeacherComponent,
    path: 'teacher'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
