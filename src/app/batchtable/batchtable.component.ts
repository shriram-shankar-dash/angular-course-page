import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Batchtable1Component } from '../batchtable1/batchtable1.component';

export interface PeriodicElement {

  Actions: string;

  Code: string;

  CourseName: string;
  BatchStart: string;

}

@Component({
  selector: 'app-batchtable',
  templateUrl: './batchtable.component.html',
  styleUrls: ['./batchtable.component.css']
})
export class BatchtableComponent {
  batchcode=''
  batchname='';
  selectedDate=''
  var1=true;
  var2=true;
  var3=true;


  var4 = false;
  var5= false;
  var6= false;


  @ViewChild('container4',{read:ViewContainerRef,static:true})
  container4!:ViewContainerRef
  ELEMENT_DATA: PeriodicElement[] = [

    { Actions: '', Code: '', CourseName: '' , BatchStart:''}

   

  ];
  
  displayedColumns: string[] = ['Actions','Code', 'CourseName','BatchStart'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 secondtable(){
  this.container4.clear()
  this.var1=false
  this.var2=false;
  this.var3=false;
  this.var4=true;
  this.var5=true;
  this.var6=true;


this.container4.createComponent(Batchtable1Component)
 }


  onDateChange(event: any): void {
    
    

  this.selectedDate = event.value;
  }

}
