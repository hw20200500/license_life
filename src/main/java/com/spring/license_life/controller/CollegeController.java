package com.spring.license_life.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.license_life.College;
import com.spring.license_life.CollegeRepository;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class CollegeController {
	@Autowired
	private CollegeRepository collegeRepository;
	
	@GetMapping("/api/college_name")
    public List college_name() {
        return collegeRepository.findAllcollege_name();
    }
	
	@GetMapping("/api/college_department")
    public List college_department() {
        return collegeRepository.findAllcollegeId();
    }
	
	
	
}
