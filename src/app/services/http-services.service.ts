import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { environment } from 'src/environments/environment'
import { user } from './user.model';
import { map } from 'rxjs/operators';
import { Album } from './album.model';
import { post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  apiURL : string;
  constructor(private http : HttpClient) { 
    this.apiURL = environment.apiURL
  }
  getAllUsers(url : string){
    return this.http.get<user[]>(this.apiURL + url);
  }
  getAllAlbums(url : string){
    return this.http.get<Album[]>(this.apiURL + url);
  }
  getAllPosts(url : string){
    return this.http.get<post[]>(this.apiURL + url);
  }

  getData(url : string){
    return this.http.get<user[]>(this.apiURL + url)
    .pipe(map(data=>{
      const newData = data.filter(d =>{
        if(d.email != environment.emailID){
          return true
        }else{
          return false;
        }
      })
      return newData;
    }));
  }
}
