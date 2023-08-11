import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {

  Actions: string;

  Code: string;

  CourseName: string;
  BatchStart: string;

}
@Component({
  selector: 'app-batchtable1',
  templateUrl: './batchtable1.component.html',
  styleUrls: ['./batchtable1.component.css']
})
export class Batchtable1Component {
  ELEMENT_DATA: PeriodicElement[] = [

    { Actions: '', Code: '', CourseName: '' , BatchStart:''}

   

  ];
  
  displayedColumns: string[] = ['Actions','Code', 'CourseName','BatchStart'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
}
