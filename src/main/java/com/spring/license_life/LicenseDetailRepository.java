package com.spring.license_life;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LicenseDetailRepository extends JpaRepository<LicenseDetail, String> {
    @Query("SELECT ld.id FROM LicenseDetail ld")
    List<String> findAllId(); 
    
    @Query("SELECT l.name FROM License l")
    List<String> findAllName(); 
    
    Optional<LicenseDetail> findBylicenseIdAndTestClass(String license_id, String test_class);
    
    List<LicenseDetail> findBylicenseId(String license_id);
}
