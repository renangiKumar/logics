import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { user } from '../../services/user.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  userArr : user[] = [];
  tempUserArr :user[] = [];
  constructor( private httpService : HttpServicesService) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  private loadUserData(){
    this.httpService.getData('users').subscribe(data=>{
      console.log(data);
      this.userArr = data;
      this.tempUserArr = data;
    })
  }
  public searchFunc(val : any){
    const temp = val.value;
    console.log(temp);
    this.tempUserArr = [];
    this.userArr.forEach(user=>{
      if(user.name.toLowerCase().indexOf(temp)!=-1 || user.email.toLowerCase().indexOf(temp)!=-1 || user.company.name.toLowerCase().indexOf(temp)!=-1){
        console.log(user)
        this.tempUserArr.push(user);
      }
    })
  }


}
