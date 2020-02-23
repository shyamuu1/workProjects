import { Component, OnInit } from '@angular/core';
import { PostalService } from 'src/app/services/postal.service';
import { PostModel } from 'src/app/models/post-model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  Posts:PostModel[];

  constructor(private ups:PostalService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.ups.getPosts().subscribe(
      posts => this.Posts = posts,
      error => console.log(error))
    console.table(this.Posts)
  }
}
