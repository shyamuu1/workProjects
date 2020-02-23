package com.myWebsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myWebsite.beans.Post;

@Repository
public interface Backend extends JpaRepository<Post, Long> {

}
