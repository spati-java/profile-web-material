import { Component, OnInit } from '@angular/core';
import{HomeService} from './home.service';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {HomeModule} from './home.module'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {

  data:any={}
constructor(private service:HomeService){
}

 ngOnInit() {
  this.getProfile();
  }
  
  getProfile(){
    this.service.getProfile().subscribe(data => this.data = data);
    console.log(this.data.name);
    
}

  

}
