import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { AlbumsComponent } from "./profile/albums/albums.component";
import { DetailsComponent } from "./profile/details/details.component";
import { PostsComponent } from "./profile/posts/posts.component";
import { ProfileComponent } from "./profile/profile.component";
import { RoutePageComponent } from "./route-page/route-page.component";

const routes: Routes = [
    {
        path: '',
        component: RoutePageComponent,
        children : [
            { path : '', component : MainPageComponent},
            { path : 'profile', component : ProfileComponent, children : [
                { path : 'details', component : DetailsComponent},
                { path : 'albums', component : AlbumsComponent},
                { path : 'posts', component : PostsComponent},
            ]}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }