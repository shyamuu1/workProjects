package com.myWebsite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myWebsite.repository.Backend;

@Service
public class PostService {
	private Backend repo;

	@Autowired
	public PostService(Backend repo) {
		this.repo = repo;
	}
}
