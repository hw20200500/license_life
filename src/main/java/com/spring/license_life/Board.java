package com.spring.license_life;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "board")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Board {
	@Id
    private int id;
	private String title; // username 속성 추가
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private String detailed;
    private Date date;

    
    // getters and setters
 // Getter 메서드
    public int getid() {
        return id;
    }
    
    public String getTitle() {
    	return title;
    }
    
    public String getdetailed() {
    	return detailed;
    }
    
    public Date getdate() {
    	return date;
    }
    
    // Setter 메서드
    public int setid() {
        return id;
    }
    
    public void setTitle(String title) {
    	this.title = title;
    }
    
    public void setdate(Date date) {
    	this.date = date;
    }
    
    public void setdetailed(String detailed) {
    	this.detailed = detailed;
    }
}
