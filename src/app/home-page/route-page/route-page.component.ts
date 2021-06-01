import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-route-page',
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.css']
})
export class RoutePageComponent implements OnInit {
  username : string = '';
  activatedSub : any;

  constructor(private router : Router,
    private httpService : HttpServicesService) { 

  }

  ngOnInit(): void {
    const data : any = sessionStorage.getItem('currentUser');
    if(data){
      this.username = JSON.parse(data).username;
      console.log(data);
    }else{
      this.logout();
    }
  }

  logout(){
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }

}
