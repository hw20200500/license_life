package com.spring.license_life;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DepartmentLicenseRepository extends JpaRepository<DepartmentLicense, String> {
    @Query("SELECT dl.departmentId FROM DepartmentLicense dl")
    List<String> findAlldepartmentId(); 
    
    @Query("SELECT dl.licenseId FROM DepartmentLicense dl")
    List<String> findAlllicenseId(); 
    
    List<DepartmentLicense> findBydepartmentId(String departmentId);
}
