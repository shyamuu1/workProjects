package com.myWebsite.beans;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "Posts")
@Entity
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long authorId;
	private String title;
	private String body;
	private Date createdDate;
	
	// Contructor w/ no Args
	public Post() {
		super();
	}
	
	//Constructor with Args
	public Post(long authorId, String title, String body, Date createdDate) {
		this.authorId = authorId;
		this.title = title;
		this.body = body;
		this.createdDate = createdDate;
	}

	public long getAuthorId() {
		return authorId;
	}

	public void setAuthorId(long authorId) {
		this.authorId = authorId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	@Override
	public String toString() {
		return "Post [authorId=" + authorId + ", title=" + title + ", body=" + body + ", createdDate=" + createdDate
				+ "]";
	}
	
	

}
