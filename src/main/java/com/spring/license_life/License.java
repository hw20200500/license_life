package com.spring.license_life;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "license")
public class License {

	@Id
    private String id;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String name;
	
	public String getId() {
        return id;
    }
	
	public String getName() {
        return name;
    }
}
