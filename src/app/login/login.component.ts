import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User("","");
  constructor(public authservices:AuthService,public router:Router) { }
login(){
this.authservices.login(this.user).subscribe(a=>{
  console.log(a);
 this.authservices.isLogged=true,
 this.router.navigateByUrl('/student');
localStorage.setItem("token",(<any>a).token)})
}
  ngOnInit(): void {
    // history.pushState()
  }

}
