import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  isActive = false;
  isLoggedIn:boolean;
  registerform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('',[Validators.required, Validators.email])
  })
  constructor(private router:Router, private us:UserService, private as:AuthenticationService) { }

  ngOnInit() {
    this.registerform.reset();
  }
  getFormData(){
    return this.registerform.value;
  }
  login(){
    let username = this.getFormData().username;
    let password = this.getFormData().password;
    let email = this.getFormData().email;
    this.user = new User(username, password, email);
    this.as.login(this.user).subscribe(
      res => {
        this.isLoggedIn = this.as.isLoggedIn;
        this.router.navigate(['/home']);
        console.log(res);
      },
      
      err => {
        this.router.navigate(['/login'])
        console.log(err)
      }
    )
    
    this.goToProfile(this.isLoggedIn);
    this.registerform.reset();
  }

  register(){
    this.user = new User(this.getFormData().username, this.getFormData().password, this.getFormData().email);
    this.us.addUser(this.user).subscribe(
     (res) =>{
        this.isLoggedIn = true;
        console.log(res)
      },
     (err) => {
        this.isLoggedIn = false;
        console.log(err);
      }
    );
    //sessionStorage.setItem("currentUser", JSON.stringify(this.user));
    console.log(sessionStorage.getItem("currentUser"));
    this.registerform.reset();
  }

  goToProfile(value:boolean){
    if(value){
      this.router.navigate(['/home']);
    }else{
      return;
    }
  }

}
