import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post-model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostalService } from '../../services/postal.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
post:PostModel;
id:Number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fedEx:PostalService,
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    this.id = +this.route.snapshot.paramMap.get('id');
    this.fedEx.getSinglePostById(this.id).subscribe(
      post => this.post = post,
      err => console.log(err)
    )
  }
  updatePost(){
    this.fedEx.updatePost(this.id, this.post).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
    this.goBackHome();
  }
  deletePost(){
    this.fedEx.deletePost(this.id).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
    this.goBackHome();
  }
  goBackHome(){
    this.router.navigate(['']);
  }

}
