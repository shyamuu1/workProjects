import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post-model';
import { PostalService } from 'src/app/services/postal.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  Posts: PostModel[];
  form = new FormGroup({
    newerPost: new FormGroup({
      title: new FormControl(''),
      body: new FormControl('')
    })

  })
  constructor(private ups: PostalService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.ups.getPosts().subscribe(
      posts => this.Posts = posts,
      error => console.log(error))
    console.table(this.Posts)
  }
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
    this.ups.createPost(newPost).subscribe(res =>
      this.Posts.push(newPost),
      err => console.log(err))
  }

}
