import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user : any;
  constructor(private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    const userData : any = sessionStorage.getItem('selectedUser');
    this.user = JSON.parse(userData);
  }
  backToHomePage(){
    sessionStorage.removeItem('selectedUser');
    this.router.navigate(['../'],{ relativeTo : this.route});
  }
  navTo(val : string){
      this.router.navigate(['./',val],{ relativeTo : this.route});
  }

}
