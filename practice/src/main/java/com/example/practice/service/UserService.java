package com.example.practice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.practice.beans.Data;
import com.example.practice.repository.UserRepository;

@Service
public class UserService {

	private UserRepository userRepository;
	
	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	public List<Data> allUsers(){
		return (List<Data>) this.userRepository.findAll();
	}
	public void createUser(Data u) {
		this.userRepository.save(u);
	}
	public void deleteUser(long id) {
		this.userRepository.deleteById(id);
	}
}
