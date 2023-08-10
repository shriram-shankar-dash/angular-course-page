import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {

  Actions: string;

  Code: string;

  CourseName: string;

  TheoryTime: string;

  PractiseTime: string;

  Description: string;

  Topics: string;

}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  entries: any[] = [];


  code:string ='';
  course:string ='';
  Theorytime:string =''
  practisetime:string ='';
  descriptions:string ='';
  topics:string ='';
 
    
 
 obj = {
   code:'',
   course:'',
   Theorytime:'',
   practisetime:'',
   descriptions:'',
   topics:''
}

  ELEMENT_DATA: PeriodicElement[] = [

    { Actions: '', Code: '', CourseName: '', TheoryTime: '', PractiseTime: '', Description: '', Topics: ''},

   

  ];
  
  displayedColumns: string[] = ['Actions','Code', 'CourseName', 'TheoryTime','PractiseTime','Description','Topics'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);




  onLocalstorage(){

     this.obj.code=this.code;
     this.obj.course=this.course;
     this.obj.Theorytime=this.Theorytime;
     this.obj.practisetime=this.practisetime;
     this.obj.descriptions=this.descriptions;
     this.obj.topics=this.topics
   
      sessionStorage.setItem("obj", JSON.stringify(this.obj));
      console.log(this.obj);  
      this.entries.push(this.obj)
      console.log(this.entries)
     
     
      

  }

  

constructor(){
  const storedEntries = localStorage.getItem('entries');
    if (storedEntries) {
      this.entries = JSON.parse(storedEntries);
    }
  }

}
