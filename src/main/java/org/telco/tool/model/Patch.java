package org.telco.tool.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "patch")
public class Patch {

	@Id
	private int id;
	private String patch_id;
	private String date;
	private String developer_name;
	private String git_tag;
	private String componnents;
	private String project_name;
	private String bundle_name;
	private String support_jira_id;
	private String merged_to_support;
	private String merged_to_master;
	private String public_jira_id;
	private String priority;
	private String description;
	private String email;
	private String patchstatus;
	
	//@JsonManagedReference
	@ManyToOne
    @JoinColumn(name="product_id" , nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Product product;
	
	public Patch() {
		super();
	}

	public Patch(int id, String patch_id, String date, String developer_name, String git_tag, String componnents,
			String project_name, String bundle_name, String support_jira_id, String merged_to_support,
			String merged_to_master, String public_jira_id, String priority, String description, String email, String patchstatus,
			Product product) {
		super();
		this.id = id;
		this.patch_id = patch_id;
		this.date = date;
		this.developer_name = developer_name;
		this.git_tag = git_tag;
		this.componnents = componnents;
		this.project_name = project_name;
		this.bundle_name = bundle_name;
		this.support_jira_id = support_jira_id;
		this.merged_to_support = merged_to_support;
		this.merged_to_master = merged_to_master;
		this.public_jira_id = public_jira_id;
		this.priority = priority;
		this.description = description;
		this.email = email;
		this.product = product;
		this.patchstatus = patchstatus;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPatch_id() {
		return patch_id;
	}

	public void setPatch_id(String patch_id) {
		this.patch_id = patch_id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getDeveloper_name() {
		return developer_name;
	}

	public void setDeveloper_name(String developer_name) {
		this.developer_name = developer_name;
	}

	public String getGit_tag() {
		return git_tag;
	}

	public void setGit_tag(String git_tag) {
		this.git_tag = git_tag;
	}

	public String getComponnents() {
		return componnents;
	}

	public void setComponnents(String componnents) {
		this.componnents = componnents;
	}

	public String getProject_name() {
		return project_name;
	}

	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}

	public String getBundle_name() {
		return bundle_name;
	}

	public void setBundle_name(String bundle_name) {
		this.bundle_name = bundle_name;
	}

	public String getSupport_jira_id() {
		return support_jira_id;
	}

	public void setSupport_jira_id(String support_jira_id) {
		this.support_jira_id = support_jira_id;
	}

	public String getMerged_to_support() {
		return merged_to_support;
	}

	public void setMerged_to_support(String merged_to_support) {
		this.merged_to_support = merged_to_support;
	}

	public String getMerged_to_master() {
		return merged_to_master;
	}

	public void setMerged_to_master(String merged_to_master) {
		this.merged_to_master = merged_to_master;
	}

	public String getPublic_jira_id() {
		return public_jira_id;
	}

	public void setPublic_jira_id(String public_jira_id) {
		this.public_jira_id = public_jira_id;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPatchstatus() {
		return patchstatus;
	}

	public void setPatchstatus(String patchstatus) {
		this.patchstatus = patchstatus;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	

	
	
	
	
	
	
}
