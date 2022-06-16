import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    StudentComponent,
    TeacherComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    AboutUsComponent,
    StudentComponent,
    TeacherComponent
    
  ]
})
export class UniversityModule { }
