package com.spring.license_life;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface DepartmentRepository extends JpaRepository<Department, String> {
	@Query("SELECT d.departmentName FROM Department d")
	List<String> findAllDepartmentName();
	
	@Query("SELECT d.departmentsId FROM Department d")
	List<String> findAlldepartmentsId();
	
	@Query("SELECT d.departments_intro1 FROM Department d")
	List<String> findAlldepartments_intro1();
	
	@Query("SELECT d.departments_intro2 FROM Department d")
	List<String> findAlldepartments_intro2();
	
	List<Department> findByCollege_collegeId(String college_id);
	
	List<Department> findBydepartmentName(String departmentName);
}
