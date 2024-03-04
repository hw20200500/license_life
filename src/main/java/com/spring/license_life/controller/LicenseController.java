package com.spring.license_life.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.license_life.Department;
import com.spring.license_life.DepartmentLicense;
import com.spring.license_life.DepartmentLicenseRepository;
import com.spring.license_life.DepartmentRepository;
import com.spring.license_life.License;
import com.spring.license_life.LicenseDetail;
import com.spring.license_life.LicenseDetailRepository;
import com.spring.license_life.LicenseRepository;
@RestController
public class LicenseController {
	@Autowired
	private LicenseRepository licenseRepository;
	
	@Autowired
	private DepartmentLicenseRepository departmentlicenseRepository;
	@Autowired
	private LicenseDetailRepository licenseDetailRepository;
	
	@GetMapping("/api/license")
    public List license() {
        return licenseRepository.findAllName();
    }
	@GetMapping("/api/license_detail")
	public Optional<LicenseDetail> license_detail(@RequestParam(value="id")String licenseId, @RequestParam(value="class")String test_class) {
		return licenseDetailRepository.findBylicenseIdAndTestClass(licenseId, test_class);
	}
	
	@GetMapping("/api/license_detail2")
	public List<LicenseDetail> license_detail2(@RequestParam(value="id")String licenseId) {
		return licenseDetailRepository.findBylicenseId(licenseId);
	}
	
	@GetMapping("/api/dl")
	public String dl(@RequestParam(value="id")String licenseId) {
		return (licenseRepository.findNameById(licenseId).get(0)).getName();
	}
	
	
	@GetMapping("/api/department_license")
	public List<String> department_license(@RequestParam(value="departmentId")String departmentId) {
		List<String> licenseId_list = departmentlicenseRepository.findBydepartmentId(departmentId).stream()
                .map(DepartmentLicense::getlicense_id)
                .collect(Collectors.toList());
		List<String> licenseName=new ArrayList<>();
		for (int i=0; i<licenseId_list.size(); i++) {
			 licenseName.add((licenseRepository.findNameById(licenseId_list.get(i)).get(0)).getName());
		} 
		return licenseName;
	}
	
	@GetMapping("/api/department_licenses")
	public List<String> department_license() {
		return departmentlicenseRepository.findAlldepartmentId();
	}
}
