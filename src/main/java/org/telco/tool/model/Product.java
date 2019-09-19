package org.telco.tool.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;



@Entity
@Table(name = "product")
public class Product {

	@Id
	private int id;
	private String name;
	private String git_url;
	
	@JsonBackReference
	@OneToMany(mappedBy = "product", fetch = FetchType.LAZY , cascade = CascadeType.ALL)
    private List<Patch> books = new ArrayList<Patch>();
	
	public Product() {
		super();
	}

	public Product(int id, String name, String git_url, List<Patch> books) {
		super();
		this.id = id;
		this.name = name;
		this.git_url = git_url;
		this.books = books;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGit_url() {
		return git_url;
	}

	public void setGit_url(String git_url) {
		this.git_url = git_url;
	}

	public List<Patch> getBooks() {
		return books;
	}

	public void setBooks(List<Patch> books) {
		this.books = books;
	}
	
	
	
	
	
	
}
