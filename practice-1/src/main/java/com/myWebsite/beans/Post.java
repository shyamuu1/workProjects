package com.myWebsite.beans;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Posts")
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "Author_ID")
	private Long authorId;
	@Column(name = "Title")
	private String title;
	@Column(name = "Body")
	private String body;
	@Column(name = "Created_Date", columnDefinition = "DATE DEFAULT SYSDATE")
	private String createdDate;

	// Contructor w/ no Args
	public Post() {
		super();
	}

	// Constructor with Args
	public Post(Long authorId, String title, String body, String createdDate) {
		this.authorId = authorId;
		this.title = title;
		this.body = body;
		this.createdDate = createdDate;
	}

	public Long getAuthorId() {
		return authorId;
	}

	public void setAuthorId(Long authorId) {
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
	public void setCreatedDate(String date) {
		this.createdDate =date;
	}

	@Override
	public String toString() {
		return "Post [authorId=" + authorId + ", title=" + title + ", body=" + body + ", createdDate=" + createdDate
				+ "]";
	}



}
