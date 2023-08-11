import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {

  Actions: string;

  Code: string;

  CourseName: string;

}
@Component({
  selector: 'app-batchtable',
  templateUrl: './batchtable.component.html',
  styleUrls: ['./batchtable.component.css']
})
export class BatchtableComponent {
  ELEMENT_DATA: PeriodicElement[] = [

    { Actions: '', Code: '', CourseName: ''}

   

  ];
  
  displayedColumns: string[] = ['Actions','Code', 'CourseName'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
}
