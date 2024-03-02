package com.spring.license_life;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CollegeRepository extends JpaRepository<College, String> {
	@Query("SELECT c.collegeName FROM College c")
	List<String> findAllcollegeName();
	
	@Query("SELECT c.collegeId FROM College c")
	List<String> findAllcollegeId();
	
	@Query("SELECT c.college_intro1 FROM College c")
	List<String> findAllcollege_intro1();
	
	@Query("SELECT c.college_intro2 FROM College c")
	List<String> findAllcollege_intro2();
	
	List<College> findBycollegeName(String collegeName);
	
}
