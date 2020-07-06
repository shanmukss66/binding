import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { personalDetail } from './models/personalDetails.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stylebinding';
  firstname:string="sriram";
  lastname:string="surya";
  gitid:string="shanmukh";
  linkedinid:string="kjcnwsd";
  
  gud:personalDetail;

  myinput ={key1:this.firstname,key2:this.lastname,key3:this.gitid,key4:this.linkedinid};

  reciever(data:any){
   this.gud=data
   console.log(this.gud);
   
  }
     
  
  
}
