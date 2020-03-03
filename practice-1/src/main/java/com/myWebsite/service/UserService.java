package com.myWebsite.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myWebsite.beans.User;

import com.myWebsite.repository.UserRepo;

@Service
public class UserService {

	private UserRepo repo;

	@Autowired
	public UserService(UserRepo repo) {
		this.repo = repo;
	}
	
	public User getUserByUsername(String username) {
		 return this.repo.findByUsername(username);

	}

	public void addUser(User u) {
		this.repo.save(u);
	}
}
