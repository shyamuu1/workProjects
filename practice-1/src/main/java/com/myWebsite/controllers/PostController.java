package com.myWebsite.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.myWebsite.beans.Post;
import com.myWebsite.service.PostService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/post")
public class PostController {
	
	private PostService ups;
	
	@Autowired
	public void setUps(PostService ups) {
		this.ups = ups;
	}
	@RequestMapping(value="/allPosts", method=RequestMethod.GET)
	ResponseEntity<List<Post>> getPosts(){
		return new ResponseEntity<>(this.ups.getPosts(), HttpStatus.OK);
		
	}
	@RequestMapping(value="/{authorId}", method=RequestMethod.GET)
	ResponseEntity<Post> getSinglePostById(@PathVariable("authorId") Long id) {
		ResponseEntity<Post> resp = null;
		Post p = this.ups.findSingleById(id);
		if(p == null) {
			resp = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}else {
			resp = new ResponseEntity<>(p, HttpStatus.OK);
		}
		return resp;
	}
	@RequestMapping(value="/create", method=RequestMethod.POST)
	ResponseEntity<String> createPost(@RequestBody Post post){
		ResponseEntity<String> resp = null;
		try {
			this.ups.addPost(post);
			resp=  new ResponseEntity<>("Post Created Successfully", HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			resp = new ResponseEntity<>("Post Creation Failed!", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
	@RequestMapping(value="/edit/{id}", method=RequestMethod.PUT)
	ResponseEntity<String> updatePost(@PathVariable("id") Long id, @RequestBody Post post){
		ResponseEntity<String> resp = null;
			try {
				Post p = this.ups.findSingleById(id);
				p = new Post(post.getAuthorId(), post.getTitle(), post.getBody());
				this.ups.addPost(p);
			}
			catch(Exception e) {
				e.printStackTrace();
				resp = new ResponseEntity<>("Post was not updated", HttpStatus.BAD_REQUEST);
			}
			return resp;
	
	}
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	ResponseEntity<String> deletePost(@PathVariable("id") Long id){
		ResponseEntity<String> res = null;
		try {
			this.ups.removePost(id);
			res = new ResponseEntity<>("Post Successfully Deleted", HttpStatus.OK);
		}catch(Exception e){
			e.printStackTrace();
			res = new ResponseEntity<>("Post was not updated", HttpStatus.BAD_REQUEST);
		}
		return res;
	}
	
	

}
