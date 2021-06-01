import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/services/user.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user : user | undefined;
  constructor() {
    const data : any = sessionStorage.getItem('selectedUser');
    this.user = JSON.parse(data);
    console.log(this.user);
   }

  ngOnInit(): void {
    
  }

}
