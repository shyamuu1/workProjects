package com.example.practice.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Table(name="users")
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private  long id;
	private String fullname;
	private String initials;
	private String title;
	
	//No args Constructor
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	//Constructor with arguments
	public User(long id, String fullname, String initials, String title) {
		super();
		this.id = id;
		this.fullname = fullname;
		this.initials = initials;
		this.title = title;
	}
	//getters and setters
	public long getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getInitials() {
		return initials;
	}
	public void setInitials(String initials) {
		this.initials = initials;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	//Overwrite toString()
	@Override
	public String toString() {
		return "User [id=" + id + ", fullname=" + fullname + ", initials=" + initials + ", title=" + title + "]";
	}
	
	
	
	
	

}
