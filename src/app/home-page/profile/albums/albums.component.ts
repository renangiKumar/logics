import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Album } from 'src/app/services/album.model';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumsArr : Album[] = [];
  album : any;
  constructor(private router : Router,
    private httpService : HttpServicesService) { }

    ngOnInit(): void {
      this.loadAlbums();
      const data : any = sessionStorage.getItem('selectedUser');
      this.album = JSON.parse(data);
    }
    loadAlbums(){
      this.httpService.getAllAlbums('albums').
      pipe(map(data =>{
        const newValue = data.filter(d=>{
          return d.userId == this.album.id
        })
        return newValue;
      })).subscribe(data=>{
        console.log(data);
        this.albumsArr = data;
      })
    }

}
