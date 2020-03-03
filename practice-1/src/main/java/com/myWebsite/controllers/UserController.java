package com.myWebsite.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.myWebsite.beans.User;
import com.myWebsite.service.AuthService;
import com.myWebsite.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {

	private UserService us;
	private AuthService as;

	@Autowired
	public void setUserService(UserService us, AuthService as) {
		this.us = us;
		this.as =as;
	}

	@RequestMapping(value = "/{username}", method = RequestMethod.GET)
	ResponseEntity<User> findUser(@PathVariable("username") String username) {
		ResponseEntity<User> res = null;
		User user = this.us.getUserByUsername(username);
		if (user == null) {
			res = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		} else {
			res = new ResponseEntity<>(user, HttpStatus.OK);
		}
		return res;
	}

	@PostMapping("/register")
	ResponseEntity<String> register(@RequestBody User u) {
		ResponseEntity<String> res = null;
		try {
			this.us.addUser(u);
			res = new ResponseEntity<>("User successfully registered", HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			res = new ResponseEntity<>("Internal Error...", HttpStatus.I_AM_A_TEAPOT);
		}
		return res;
	}
	@PostMapping("/login")
	ResponseEntity<User> login(@RequestBody User u){
		ResponseEntity<User> resp = null;
		String username = u.getUsername();
		String password = u.getPassword();
		User validatedUser = this.as.authenticate(username, password);
		if(validatedUser == null)
			resp = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		else {
			resp = new ResponseEntity<>(validatedUser, HttpStatus.OK);
		}
		return resp;
	}

}
