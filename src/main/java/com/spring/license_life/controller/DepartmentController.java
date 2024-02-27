package com.spring.license_life.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.spring.license_life.CollegeRepository;
import com.spring.license_life.Department;
import com.spring.license_life.DepartmentRepository;
@RestController
public class DepartmentController {

	@Autowired
	private DepartmentRepository departmentRepository;
	
	@GetMapping("/api/department_name")
    public List department_name() {
        return departmentRepository.findAllDepartmentName();
    }
	
	@PostMapping("/api/college_department")
    public List optional_department(@RequestParam(value="collegeId")String collegeId) {
//		List<Department> optional_dep = departmentRepository.findBycollege_id("d1");
        List<Department> department = departmentRepository.findByCollege_collegeId(collegeId);
		return department.stream()
                .map(Department::getDepartmentName)
                .collect(Collectors.toList());
    }
	
	@GetMapping("/api/d1")
	public List d1() {
//		List<Department> optional_dep = departmentRepository.findBycollege_id("d1");
        List<Department> department = departmentRepository.findByCollege_collegeId("d1");
		return department.stream()
                .map(Department::getDepartmentName)
                .collect(Collectors.toList());
    }
	
	@GetMapping("/api/d2")
	public List d2() {
//		List<Department> optional_dep = departmentRepository.findBycollege_id("d1");
        List<Department> department = departmentRepository.findByCollege_collegeId("d2");
		return department.stream()
                .map(Department::getDepartmentName)
                .collect(Collectors.toList());
    }
	
	@GetMapping("/api/d3")
	public List d3() {
//		List<Department> optional_dep = departmentRepository.findBycollege_id("d1");
        List<Department> department = departmentRepository.findByCollege_collegeId("d3");
		return department.stream()
                .map(Department::getDepartmentName)
                .collect(Collectors.toList());
    }
}
