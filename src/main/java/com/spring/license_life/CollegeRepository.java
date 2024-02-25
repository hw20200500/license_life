package com.spring.license_life;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CollegeRepository extends JpaRepository<College, String> {
	@Query("SELECT c.college_name FROM College c")
	List<String> findAllcollege_name();
}
