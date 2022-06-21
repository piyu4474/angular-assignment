import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  dob: any;
  age : any;
  phno: any;
  name: any;
  email: any;
  CalculateAge(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);      
    }
  }

  save()
  {
    alert('Name: '+this.name+'  '+'Email: '+this.email+'  '+'Age: '+ this.age+'  '+'Phone No: '+this.phno);
    this.name="";
    this.email="";
    this.age="";
    this.phno="";
  }

 
}
