package com.example.practice.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.practice.beans.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
