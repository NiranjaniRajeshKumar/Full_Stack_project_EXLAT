package com.example.demo.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Teacher;
@Repository
public interface TeacherRepo extends JpaRepository<Teacher, Integer> {
	List<Teacher> findByFirstNameContaining(String firstName);
	List<Teacher> findByteachingType(String teachingType);

}
