package com.myWebsite.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myWebsite.beans.Post;
import com.myWebsite.repository.Backend;

@Service
public class PostService {
	private Backend repo;

	@Autowired
	public PostService(Backend repo) {
		this.repo = repo;
	}
	
	public List<Post> getPosts(){
		return this.repo.findAll();
	}
	
	public void addPost(Post p) {
		this.repo.save(p);
	}
	public Post findSingleById(Long id) {
		return this.repo.getOne(id);
	}
	public void removePost(Long id) {
		this.repo.deleteById(id);
	}
	public String getCurrentDate() {
		return LocalDate.now().toString();
	}
	
}
