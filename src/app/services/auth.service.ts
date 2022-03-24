import { HttpClient } from '@angular/common/http';
import { Inject,  Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged=false;
login(user:User){
return this.http.post(this.baseUrl,user)
}
  constructor(public http:HttpClient,@Inject("baseUrl") public baseUrl:string) {
    this.baseUrl+="login/";

  }

}
