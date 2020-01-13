package com.example.practice.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("/users")
	public void addUser(@RequestBody User u) {
		System.out.println("Name: "+u.getFullname()+" Initials: "+u.getInitials()+" Title: "+u.getTitle());
		userRepository.save(u);
		
	}
	
	@PutMapping("/users")
	public void updateUser(@RequestBody User u) {
		userRepository.save(u);
	}
	
	@PostMapping("/users/{id}")
	public void deleteUser(@PathVariable Long id){
		userRepository.deleteById(id);
	}

}
