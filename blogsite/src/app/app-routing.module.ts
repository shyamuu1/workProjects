import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: "create", component: ViewPostComponent },
  {path: "postlist", component: PostListComponent},
  {path: 'home', component: HomeComponent},
  {path: "", redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: false }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
