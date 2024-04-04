package com.spring.license_life;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Integer> {
	List<Board> findAll();
	Board findByid(int id);
	List<Board> findAllByOrderByIdDesc();
	void save(newBoard newBoard);
}
