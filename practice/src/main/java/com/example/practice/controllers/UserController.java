package com.example.practice.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.practice.beans.User;
import com.example.practice.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	private final UserRepository userRepository;
	
	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return (List<User>) userRepository.findAll();
	}

}
