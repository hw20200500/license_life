package com.spring.license_life.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.license_life.College;
import com.spring.license_life.CollegeRepository;
import com.spring.license_life.Department;
import com.spring.license_life.DepartmentRepository;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class CollegeController {
	@Autowired
	private CollegeRepository collegeRepository;
	@Autowired
	private DepartmentRepository departmentRepository;
	
	@GetMapping("/api/college_name")
    public List college_name() {
        return collegeRepository.findAllcollegeName();
    }
	
	@GetMapping("/api/college_department")
    public List college_department() {
        return collegeRepository.findAllcollegeId();
    }
	
	@GetMapping("/api/college")
	public List college_data(@RequestParam("collegeName")String collegeName) {
		List <List> college_list=new ArrayList<>();
		college_list.add(collegeRepository.findBycollegeName(collegeName));
		String id = collegeRepository.findBycollegeName(collegeName).get(0).getcollegeId();
		college_list.add(departmentRepository.findByCollege_collegeId(id).stream()
                .map(Department::getDepartmentName)
                .collect(Collectors.toList()));
		college_list.add(departmentRepository.findByCollege_collegeId(id).stream()
                .map(Department::getdepartmentsId)
                .collect(Collectors.toList()));

		return college_list;
	}
	
}
