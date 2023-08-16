import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {

  Actions: string;
  Code: string;
  Coursename: string;
  Teacher: string;

}

@Component({
  selector: 'app-batchtable2',
  templateUrl: './batchtable2.component.html',
  styleUrls: ['./batchtable2.component.css']
})
export class Batchtable2Component {
  code = ''
  batchname = '';
  selectedDate = ''
  var1 = true;
  var2 = true;
  var3 = true;


  var4 = false;
  var5 = false;
  var6 = false;


  @ViewChild('container6', { read: ViewContainerRef, static: true })
  container6!: ViewContainerRef
  ELEMENT_DATA: PeriodicElement[] = [

    { Actions: '', Code: '', Coursename: '', Teacher: '' }
  ];
  displayedColumns: string[] = ['Actions', 'Code', 'Coursename', 'Teacher'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  CourseName: any;
  Teacher: any;
Coursename: any;
seclick() {
    this.container6.clear()
    this.var1 = false
    this.var2 = false;
    this.var3 = false;
    this.var4 = true;
    this.var5 = true;
    this.var6 = true;


    this.container6.createComponent(Batchtable2Component)
  }
  onDateChange(event: any): void {
    this.selectedDate = event.value;
  }

}
