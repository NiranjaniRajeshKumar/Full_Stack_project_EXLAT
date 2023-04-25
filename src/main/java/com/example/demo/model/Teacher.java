package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "teacher_table")
@DynamicUpdate
public class Teacher {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer teacher_id;
	
	@Column(name = "first_name", nullable = false)
	private String firstName;
	@Column(nullable = false)
	private String lastName;
	@Column(nullable=false)
	private String email;
	@Column(nullable = false)
	private String mobno;
	@Column(nullable = false)
	private String address;
	@Column(nullable = false)
	private String qualification;
	@Column(nullable = false)
	private String teaching_subject;
	@Column(nullable=false)
	private String teachingType;
public Teacher() {}
	
	public Teacher(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	public Teacher(String firstName, String lastName, String email) {
		this(firstName, lastName);
		this.email = email;
	}
	
	public Integer getTeacher_id() {
		return teacher_id;
	}

	public void setTeacher_id(Integer teacher_id) {
		this.teacher_id = teacher_id;
	}

	public String getMobno() {
		return mobno;
	}

	public void setMobno(String mobno) {
		this.mobno = mobno;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getTeaching_subject() {
		return teaching_subject;
	}

	public void setTeaching_subject(String teaching_subject) {
		this.teaching_subject = teaching_subject;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	public String getTeachingType() {
		return teachingType;
	}

	public void setTeachingType(String teachingType) {
		this.teachingType = teachingType;
	}
	
}

