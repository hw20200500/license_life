package com.spring.license_life;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "college")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class College {
	@Id
	@Column(name = "college_id")
    private String collegeId;
	private String collegeName; // username 속성 추가
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private String college_intro1;
    private String college_intro2;

    // getters and setters
 // Getter 메서드
    public String getcollege_name() {
        return collegeName;
    }

    
    
 // Getter 메서드
    public String getcollegeId() {
        return collegeId;
    }

 // Getter 메서드
    public String getcollege_intro1() {
        return college_intro1;
    }

    
 // Getter 메서드
    public String getcollege_intro2() {
        return college_intro2;
    }
}
