import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../../../services/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('input1') user1 : any; 

  constructor(private router : Router, private route : ActivatedRoute) {
   }

  ngOnInit(): void {
  }
  viewProfile(){
    sessionStorage.setItem('selectedUser', JSON.stringify(this.user1));
    this.router.navigate(['profile/details'],{ relativeTo : this.route});
  }

}
