package com.spring.license_life;

import java.sql.Date;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

public class newBoard {
	private String title; // username 속성 추가
    
    private String detailed;
    private Date date;
    
	public newBoard(String title, Date date, String detailed) {
		this.title = title;
		this.date = date;
		this.detailed = detailed;
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
}
