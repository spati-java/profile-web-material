import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http:Http){
    }
    
    getProfile(){
      return this.http.get('http://localhost:8081/profile').map((res:Response)=>res.json());
  }

}
