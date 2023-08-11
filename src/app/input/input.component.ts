import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

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
  constructor(){
    
    const storedEntries = localStorage.getItem('entries');
      if (storedEntries) {
        this.entries = JSON.parse(storedEntries);
      }
     
    }

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
  
    const personCopy = { ...this.obj};
    this.entries.push(personCopy)


    this.isDisabled=true;

      
      console.log(this.entries)
  }


  deleteRow(row: any) {
    const index = this.entries.indexOf(row);
    if (index !== -1) {
      this.entries.splice(index, 1);
      console.log('Deleted:', row);
    }
  
  }

// for editing a row 

isDisabled: boolean = false; 

  editRow(row: any) {
    const index = this.entries.indexOf(row);
    
    
    this.isDisabled = !this.isDisabled;


   
    console.log(index)
    console.log(this.entries[index].code)
   
    if(!this.isDisabled){ 
      this.code=row.code
      this.course=row.course
      this.Theorytime = row.Theorytime
      this.practisetime = row.practisetime
      this.descriptions = row.descriptions
      this.topics= row.topics
    }
    if(this.isDisabled){
     
    this.entries[index].code = this.code
    this.entries[index].course=this.course
    this.entries[index].Theorytime=this.Theorytime
    this.entries[index].practisetime=this.practisetime
    this.entries[index].descriptions=this.descriptions
    this.entries[index].topics=this.topics
   
    
    }
    
  }





}
