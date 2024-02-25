package com.spring.license_life;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "college")
public class College {
	@Id
    private String college_id;
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String college_name; // username 속성 추가
    private String college_intro1;
    private String college_intro2;

    // getters and setters
 // Getter 메서드
    public String getcollege_name() {
        return college_name;
    }

    
    
 // Getter 메서드
    public String getcollege_id() {
        return college_id;
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
