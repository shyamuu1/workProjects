package com.example.practice.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.practice.beans.Data;

@Repository
public interface UserRepository extends CrudRepository<Data, Long> {

}
