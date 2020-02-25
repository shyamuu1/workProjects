import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post-model';
import { PostalService } from 'src/app/services/postal.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  Posts: PostModel[];
  subscription:Subscription;
  form = new FormGroup({
    newerPost: new FormGroup({
      title: new FormControl(''),
      body: new FormControl('')
    })

  })
  constructor(private router:Router, private ups: PostalService) { }

  ngOnInit() {
    //this.getPosts();
  }

  // getPosts(): void {
  //   this.subscription = this.ups.getPosts().subscribe(
  //     posts => this.Posts = posts,
  //     error => console.log(error))
  // }
  cleanUp(pendingPost:PostModel){
    if(typeof(pendingPost.title) != "string"){
      pendingPost.title = "";
    }
    if(typeof(pendingPost.body) != "string"){
      pendingPost.body = "";
    }
  }
  submitPost() {
    let nPost = this.form.value.newerPost;
    let newPost = new PostModel(nPost.title, nPost.body)
    this.cleanUp(newPost);
    this.subscription = this.ups.createPost(newPost).subscribe(res =>
      this.Posts.push(newPost),
      err => console.log(err))
    this.goBackHome();
  }

  goBackHome(){
    this.router.navigate(['', 'post.authorId']);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  // refreshComponent(){
  //   window.location.reload();
  // }

}

