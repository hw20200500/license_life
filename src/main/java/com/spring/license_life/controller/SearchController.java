package com.spring.license_life.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.license_life.CollegeRepository;
import com.spring.license_life.DepartmentRepository;
import com.spring.license_life.LicenseDetail;
import com.spring.license_life.LicenseRepository;
import com.spring.license_life.Search;
@RestController

public class SearchController {
	@Autowired
	private LicenseRepository licenseRepository;
	
	@Autowired
	private CollegeRepository collegeRepository;
	@Autowired
	private DepartmentRepository departmentRepository;
	
	@GetMapping("/api/search")
	public Search search() {
		
		Search searchs = new Search(collegeRepository.findAllcollegeName(), departmentRepository.findAllDepartmentName(), licenseRepository.findAllName());
		List<Search> searchList=new ArrayList<>();
		searchList.add(searchs);
		return searchs;
	}
}
