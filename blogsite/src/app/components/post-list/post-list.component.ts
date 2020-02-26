import { Component, OnInit } from '@angular/core';
import { PostalService } from 'src/app/services/postal.service';
import { PostModel } from 'src/app/models/post-model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  Posts:PostModel[];
  post:PostModel;
  private subscription:Subscription;
  

  constructor(private ups:PostalService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.subscription = this.ups.getPosts().subscribe(
      posts => this.Posts = posts,
      error => console.log(error))
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
}
