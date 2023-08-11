import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { BatchesComponent } from '../batches/batches.component';

  


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'course-page';
  @ViewChild('container1',{read:ViewContainerRef,static:true})
  container1!:ViewContainerRef;
  @ViewChild('container2',{read:ViewContainerRef,static:true})
  container2!:ViewContainerRef;
onAddTopic(){
  this.container1.clear()
  this.container1.createComponent(InputComponent)
}
content=true
 batch(){
     this.content=false
     this.container2.createComponent(BatchesComponent)
 }

}
