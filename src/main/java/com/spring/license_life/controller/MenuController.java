package com.spring.license_life.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.license_life.College;
import com.spring.license_life.CollegeRepository;
import com.spring.license_life.Department;
import com.spring.license_life.DepartmentRepository;
import com.spring.license_life.Menu;

@RestController
public class MenuController {
	@Autowired
	private DepartmentRepository departmentRepository;
	@Autowired
	private CollegeRepository collegeRepository;
	
	private Menu menu;
	
	
	@GetMapping(value = "/api/menu")
	public List<Menu> createMenu() {
        List<Menu> menuList = new ArrayList<>();

        List<College> colleges = collegeRepository.findAll();
        List<String> college_name = collegeRepository.findAllcollegeName();
        List<String> collegeId = collegeRepository.findAllcollegeId();
        for (int i=0; i<colleges.size(); i++) {
            List<Department> departments = departmentRepository.findByCollege_collegeId(collegeId.get(i));
            menuList.add(new Menu(college_name.get(i), departments.stream()
                    .map(Department::getDepartmentName)
                    .collect(Collectors.toList())));
        }

        return menuList;
    }

}
