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
  @ViewChild('container4',{read:ViewContainerRef,static:true})
  container4!:ViewContainerRef
  ELEMENT_DATA: PeriodicElement[] = [

    { Actions: '', Code: '', CourseName: '' , BatchStart:''}

   

  ];
  
  displayedColumns: string[] = ['Actions','Code', 'CourseName','BatchStart'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 secondtable(){
  this.container4.clear()
this.container4.createComponent(Batchtable1Component)
 }

}
