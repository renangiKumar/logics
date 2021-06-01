import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/services/user.model';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordType : string = 'password';
  status : boolean = true;
  alertMsg : string = '';
  alert : boolean = false;
  sT : any;
  tempUserArr : user[] = [];

  constructor(private router : Router, private httpService : HttpServicesService) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      password: new FormControl("", [
        Validators.required
      ])
    });
   }

  ngOnInit(): void {
    this.loadAllUserData();
  }

  private loadAllUserData(){
    this.httpService.getAllUsers('users').subscribe(data=>{
      console.log(data);
      this.tempUserArr = data;
    })
  }

  

  public submitLoginForm() {
    this.alert = false;
    if (this.loginForm.invalid) {
      let message = ''
      // console.log(this.loginForm.controls.email)
      if (this.loginForm.controls.email.hasError('required')) {
        message = "Email ID Required";
      } else if (this.loginForm.controls.email.hasError('email') || this.loginForm.controls.email.hasError('pattern')) {
        message = "Invalid Email";
      } else if (this.loginForm.controls.password.hasError('required')) {
        message = "Password Required"
      }
      this.alert = true;
      this.alertMsg = message;
      this.status = true;
      if(this.sT){
        clearTimeout(this.sT);
        this.sT = setTimeout(()=>{
          this.alert = false;
        },3000)
      }else{
        this.sT = setTimeout(()=>{
          this.alert = false;
        },3000)
      }
    } else {
      let duration;
      if(this.loginForm.value.email == environment.emailID && this.loginForm.value.password == environment.pass){
        this.alert = true;
        this.alertMsg = 'Login Successful';
        this.status = false;
        duration = 1000;
        this.tempUserArr.forEach(data=>{
          if(data.email == environment.emailID){
            sessionStorage.setItem('currentUser',JSON.stringify(data));
          }
        })
        setTimeout(()=>{
          this.router.navigate(['/home-page']);
        },1000)
      }else{
        this.alert = true;
        this.alertMsg = 'Invalid Credientials';
        this.status = true;
        duration = 3000;
      }
      if(this.sT){
        clearTimeout(this.sT);
        this.sT = setTimeout(()=>{
          this.alert = false;
        },duration)
      }else{
        this.sT = setTimeout(()=>{
          this.alert = false;
        },duration)
      }
    
    }
  }

}
