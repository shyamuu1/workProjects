package com.myWebsite.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.myWebsite.service.PostService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {
	
	private PostService ups;
	
	public PostService getUps(PostService ups) {
		return this.ups;
	}
	
	

}
