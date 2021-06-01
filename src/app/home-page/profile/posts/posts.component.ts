import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { post } from 'src/app/services/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsArr : post[] = [];
  post : post | undefined;

  constructor(private httpService : HttpServicesService) { }

  ngOnInit(): void {
    const data : any = sessionStorage.getItem('selectedUser');
    this.post = JSON.parse(data);
    this.loadAllPosts();
  }

  loadAllPosts(){
    this.httpService.getAllPosts('posts').
    pipe(map(data =>{
      const newValue = data.filter(d=>{
        return d.userId == this.post?.id
      })
      return newValue;
    })).subscribe(data=>{
      console.log(data);
      this.postsArr = data;
    })
  }


}
