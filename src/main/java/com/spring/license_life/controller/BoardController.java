package com.spring.license_life.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.license_life.Board;
import com.spring.license_life.BoardRepository;
import com.spring.license_life.Department;

import org.springframework.ui.Model;

@RestController
public class BoardController {
	@Autowired
	private BoardRepository boardRepository;
	
	@GetMapping("/api/board")
    public List board() {
        return boardRepository.findAllByOrderByIdDesc();
    }
	
	@GetMapping("/api/boardDetail")
	public Board boardDetail(@RequestParam("id")int id) {
		

		return boardRepository.findByid(id);
	}
	
	@GetMapping("/api/createBoard")
	public void createBoard(Model model, @RequestParam("title") String title, @RequestParam("date") Date date, @RequestParam("detailed") String detailed) {
		
		Board board = new Board();
        board.setTitle(title);
        board.setdate(date);
        board.setdetailed(detailed);
		
		boardRepository.save(board);
		
	}
}
