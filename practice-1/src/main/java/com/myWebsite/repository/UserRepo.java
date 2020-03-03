package com.myWebsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.myWebsite.beans.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
	@Query("FROM #{#entityName} WHERE username = ?1")
	User findByUsername(String username);
}
