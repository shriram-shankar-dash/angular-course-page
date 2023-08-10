import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { InputComponent } from '../input/input.component';

  


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'course-page';
  @ViewChild('container1',{read:ViewContainerRef,static:true})
  container1!:ViewContainerRef;
onAddTopic(){
  this.container1.clear()
  this.container1.createComponent(InputComponent)
}

}
