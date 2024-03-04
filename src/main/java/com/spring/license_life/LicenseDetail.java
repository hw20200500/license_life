package com.spring.license_life;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "license_detailed")
public class LicenseDetail {
	@Id
	@Column(name = "test_class")
	private String testClass;
	@Column(name = "license_id")
	private String licenseId;
    
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String qualification;
	private String subject;
	private String pass_standard;
	
	@Column(name = "exam_process")
	private String examProcess;
	private String tips;
	
	
	public String getQualification() {
        return qualification;
    }
	
	public String getSubject() {
        return subject;
    }
	
	public String getpass_standard() {
        return pass_standard;
    }
	
	public String gettest_class() {
        return testClass;
    }
	
	public String getlicenseId() {
        return licenseId;
    }
	
	public String getexam_process() {
        return examProcess;
    }
	
	public String getTips() {
        return tips;
    }
	
}
