package com.spring.license_life.controller;

import java.util.ArrayList;
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
import com.spring.license_life.DepartmentLicense;
import com.spring.license_life.DepartmentLicenseRepository;
import com.spring.license_life.DepartmentRepository;
import com.spring.license_life.LicenseDetailRepository;
import com.spring.license_life.LicenseRepository;
@RestController
public class DepartmentController {

	@Autowired
	private DepartmentRepository departmentRepository;
	@Autowired
	private LicenseRepository licenseRepository;
	
	@Autowired
	private DepartmentLicenseRepository departmentlicenseRepository;
	@Autowired
	private LicenseDetailRepository licenseDetailRepository;
	
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
	
	@GetMapping("/api/department")
	public List department(@RequestParam(value="departmentName")String departmentName) {
		List departments = new ArrayList<>();
		List<Department> department_list = departmentRepository.findBydepartmentName(departmentName);
		List<String> licenseId_list = departmentlicenseRepository.findBydepartmentId(((Department) department_list.get(0)).getdepartmentsId()).stream()
                .map(DepartmentLicense::getlicense_id)
                .collect(Collectors.toList());
		List<String> licenseName=new ArrayList<>();
		for (int i=0; i<licenseId_list.size(); i++) {
			 licenseName.add((licenseRepository.findNameById(licenseId_list.get(i)).get(0)).getName());
		} 
		departments.add(department_list);
		departments.add(licenseName);
		return departments;
		
	}
}
