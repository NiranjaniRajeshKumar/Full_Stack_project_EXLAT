package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Teacher;
import com.example.demo.repository.TeacherRepo;
import com.example.demo.service.TeacherServImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")


public class TeacherControllers {
	
	public TeacherServImpl teachServ;
	public TeacherRepo teacherRepository;
	
	@Autowired
	public TeacherControllers(TeacherRepo teacherRepository,TeacherServImpl teachServ) {
		this.teacherRepository = teacherRepository;
		this.teachServ = teachServ;

	}

@PostMapping("/teachers")
	
	public ResponseEntity<Teacher> saveTeacher(@RequestBody Teacher tec){
		return new ResponseEntity<Teacher>(teachServ.saveTeacher(tec), HttpStatus.CREATED);
	}
	
	
	@PutMapping("/teachers/{teacherId}")
	public ResponseEntity<Teacher> updateTeacherDetailsById(@PathVariable("teacherId") int teacher_id,
			@RequestBody Teacher tec){
		return new ResponseEntity<Teacher>(teachServ.updateTeacherDetails(tec, teacher_id), HttpStatus.OK);
		
	}

	
	@GetMapping("/teachers/{teacher_id}")
	public ResponseEntity<Teacher>  getTeacherById(@PathVariable("teacher_id")  int teacherId){
		return new ResponseEntity<Teacher>(teachServ.getTeacherById(teacherId), HttpStatus.OK);
	}
	
	@DeleteMapping("/teachers/{teacher_id}")
	public ResponseEntity<String> deleteTeacherById(@PathVariable("teacher_id")  int teacherId){
		teachServ.deleteTeacherById(teacherId);
		return new ResponseEntity<String>("deleted successfully", HttpStatus.OK);
	}
	
	@DeleteMapping("/teachers")
	public ResponseEntity<HttpStatus> deleteAllTeachers() {
		try {
			teacherRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
	}
	
	@GetMapping("/teachers")
	public ResponseEntity<List<Teacher>> getAllTeachers (@RequestParam(required = false) String name){

	try {

	List<Teacher> teacherList = new ArrayList<Teacher>(); 
	if(name !=null) {
		teacherRepository.findByFirstNameContaining (name).forEach(teacherList::add); 
		return new ResponseEntity<>(teacherList, HttpStatus.OK);
		}
	else{
		teacherList = teacherRepository.findAll();

		return new ResponseEntity<>(teacherList, HttpStatus.OK);
		}
	
}
	catch(Exception e) {
		return new ResponseEntity<> (null, HttpStatus.INTERNAL_SERVER_ERROR);

	}
}
	
	@GetMapping("/teachers/primaryTeach")
	public ResponseEntity<List<Teacher>> findByPublished() {
		try {
			List<Teacher> techDomainTeachList = teacherRepository.findByteachingType("primary");

			if (techDomainTeachList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(techDomainTeachList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/teachers/secondaryTeach")
	public ResponseEntity<List<Teacher>> findByPublished1() {
		try {
			List<Teacher> techDomainTeachList = teacherRepository.findByteachingType("secondary");

			if (techDomainTeachList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(techDomainTeachList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
