import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BatchtableComponent } from '../batchtable/batchtable.component';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent {
  @ViewChild('container3',{read:ViewContainerRef,static:true})
  container3!:ViewContainerRef
  onAddBatch(){
    this.container3.clear()
  this.container3.createComponent(BatchtableComponent)
  }
}
