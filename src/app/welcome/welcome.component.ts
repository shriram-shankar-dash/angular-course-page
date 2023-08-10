import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent {
  constructor(private rout:Router){}
  username:string=''
  password:string=''
  onSubmit(){
    if (this.username==='shriram.dash@cozentus.com' && this.password==='Dash@123') {
      console.log('successfully login')
      this.rout.navigate(['/home'])
      sessionStorage.setItem('username',this.username)
    } else {
      alert('invalid username or password')
    }
  }
    
}
