package com.example.practice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.practice.beans.Data;
import com.example.practice.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	private UserService us;
	
	@Autowired
	public void setUserService(UserService us) {
		this.us = us;
	}
	
	@GetMapping("/users")
	public List<Data> getUsers(){
		return us.allUsers();
	}
	
	@PostMapping("/users")
	public void addUser(@RequestBody Data u) {
		us.createUser(u);
		
	}
	
//	@PutMapping("/users")
//	public void updateUser(@RequestBody User u) {
//		userRepository.save(u);
//	}
//	
	@DeleteMapping("/users/{id}")
	public void delete(@PathVariable(value="id") Long id){
		us.deleteUser(id);
	}

}
