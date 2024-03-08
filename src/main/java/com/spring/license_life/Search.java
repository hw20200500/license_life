package com.spring.license_life;

import java.util.List;

public class Search {
	private List<String> college;
	private List<String> department;
	private List<String> license;
	
	public Search(List<String> college, List<String> department, List<String> license) {
		this.college = college;
		this.department = department;
		this.license = license;
	}
	
	public List<String> getCollege() {
        return college;
    }
	
	public List<String> getDepartment() {
        return department;
    }
	
	public List<String> getLicense() {
        return license;
    }
}
