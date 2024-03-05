package com.spring.license_life;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LicenseRepository extends JpaRepository<License, String> {
    @Query("SELECT l.id FROM License l")
    List<String> findAllId(); 
    
    @Query("SELECT l.name FROM License l")
    List<String> findAllName(); 
    
    List<License> findNameById(String id);
    List<License> findByName(String name);
}
