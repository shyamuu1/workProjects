package com.myWebsite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myWebsite.beans.User;
import com.myWebsite.repository.UserRepo;

@Service
public class AuthService {
	
	
	private UserRepo ur;
	
	@Autowired
	public AuthService(UserRepo ur) {
		this.ur = ur;
	}
	
	public User authenticate(String username, String password) {
		User attemptedUser = this.ur.findByUsername(username);
		if(attemptedUser.getPassword().equals(password)) {
			return attemptedUser;
		}else {
			return null;
		}
		
	}
	

}
