package com.spring.license_life;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@JsonIgnoreProperties
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String college;
	private List<String> departments;
	
	public Menu(String college, List<String> departments) {
		this.college = college;
		this.departments = departments;
	}
}
