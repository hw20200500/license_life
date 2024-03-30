package com.spring.license_life;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "department")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Department {

	@Id
    private String departmentsId;
    
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "college_id")
    private College college;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String departments_intro1;
    private String departments_intro2;
    
    @Column(name = "departments_name")
    private String departmentName;

    public String getDepartmentName() {
    	return departmentName;
    }
    // getters and setters
 
    // Getter 메서드
    public College getcollege() {
        return college;
    }
    
    
    
    
 // Getter 메서드
    public String getdepartmentsId() {
        return departmentsId;
    }

 // Getter 메서드
    public String getdepartments_intro1() {
        return departments_intro1;
    }

    
 // Getter 메서드
    public String getdepartments_intro2() {
        return departments_intro2;
    }
}
