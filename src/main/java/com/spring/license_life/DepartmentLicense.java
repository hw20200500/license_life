package com.spring.license_life;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "department_license")
public class DepartmentLicense {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "department_id")
	private String departmentId;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "license_id")
	private String licenseId;
	
	public String getdepartment_id() {
		return departmentId;
	}
	
	public String getlicense_id() {
		return licenseId;
	}
}
