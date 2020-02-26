import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HomeComponent } from './containers/home/home.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';



const routes: Routes = [
  {path: "create", component: ViewPostComponent },
  {path: 'home', component: HomeComponent},
  {path: "postlist", component: PostListComponent},
  {path: 'edit/:id', component:EditPostComponent},
  {path: "", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: false }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
