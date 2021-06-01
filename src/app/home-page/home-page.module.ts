import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './main-page/card/card.component';
import { RoutePageComponent } from './route-page/route-page.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './profile/details/details.component';
import { AlbumsComponent } from './profile/albums/albums.component';
import { PostsComponent } from './profile/posts/posts.component';


@NgModule({
  declarations: [
    MainPageComponent,
    CardComponent,
    RoutePageComponent,
    ProfileComponent,
    DetailsComponent,
    AlbumsComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomePageModule { }
