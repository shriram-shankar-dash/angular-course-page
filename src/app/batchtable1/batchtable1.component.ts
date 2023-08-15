import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {

  Actions: string;
  Code: string;
  ProgramName: string;
  Student: string;

}
@Component({
  selector: 'app-batchtable1',
  templateUrl: './batchtable1.component.html',
  styleUrls: ['./batchtable1.component.css']
})
export class Batchtable1Component {
  code = ''
  batchname = '';
  selectedDate = ''
  var1 = true;
  var2 = true;
  var3 = true;


  var4 = false;
  var5 = false;
  var6 = false;


  @ViewChild('container5', { read: ViewContainerRef, static: true })
  container5!: ViewContainerRef
  ELEMENT_DATA: PeriodicElement[] = [

    { Actions: '', Code: '', ProgramName: '', Student: '' }
  ];
  displayedColumns: string[] = ['Actions', 'Code', 'ProgramName', 'Student'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  CourseName: any;
  Teacher: any;
ProgramName: any;
Student: any;
  secondclick() {
    this.container5.clear()
    this.var1 = false
    this.var2 = false;
    this.var3 = false;
    this.var4 = true;
    this.var5 = true;
    this.var6 = true;


    this.container5.createComponent(Batchtable1Component)
  }
  onDateChange(event: any): void {
    this.selectedDate = event.value;
  }

}
