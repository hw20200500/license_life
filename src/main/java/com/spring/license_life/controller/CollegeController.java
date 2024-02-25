package com.spring.license_life.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.license_life.College;
import com.spring.license_life.CollegeRepository;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class CollegeController {
	private List college_name;
	@Autowired
	private CollegeRepository collegeRepository;
	
	@GetMapping("/api/college_name")
    public List college_name() {
        return collegeRepository.findAllcollege_name();
    }
	
	
}
