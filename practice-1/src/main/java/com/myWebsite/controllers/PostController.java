package com.myWebsite.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	ResponseEntity<Post> getSinglePostById(long id) {
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
			this.ups.addCard(post);
			resp=  new ResponseEntity<>("Post Created Successfully", HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			resp = new ResponseEntity<>("Post Creation Failed!", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
	@RequestMapping(value="/edit/{id}", method=RequestMethod.POST)
	ResponseEntity<String> updatePost(@RequestBody Post post){
		ResponseEntity<String> resp = null;
			try {
				this.ups.addCard(post);
				resp = new ResponseEntity<>("Post Updated Successfully", HttpStatus.OK);
			}catch(Exception e) {
				e.printStackTrace();
				resp = new ResponseEntity<>("Post was not updated", HttpStatus.BAD_REQUEST);
			}
			return resp;
	
	}
	

}
