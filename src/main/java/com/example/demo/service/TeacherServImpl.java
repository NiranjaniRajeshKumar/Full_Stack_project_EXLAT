package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.TeacherservInter.TeacherServ;
import com.example.demo.model.Teacher;
import com.example.demo.repository.TeacherRepo;

@Service
public class TeacherServImpl implements TeacherServ{

	TeacherRepo teac_Repo;

	public TeacherServImpl(TeacherRepo teac_Repo) {
		this.teac_Repo = teac_Repo;
	}

	public Teacher saveTeacher(Teacher tec) {
		return teac_Repo.save(tec);
	}

	@Override
	public List<Teacher> getTeachersFromDb() {
		return teac_Repo.findAll();
	}

	@Override//5
	public Teacher getTeacherById(int teacherId) {
		Optional<Teacher> tec = teac_Repo.findById(teacherId);
		if(tec.isPresent()) {
			return tec.get();
		}
		else {
			return null;
		}
	}

	@Override
	public Teacher updateTeacherDetails(Teacher newVal, int teacherId) {
		Optional<Teacher> tec = teac_Repo.findById(teacherId);
		if(tec.isPresent()) {
			Teacher existingTeacher = tec.get();  

			existingTeacher.setFirstName(newVal.getFirstName());
			existingTeacher.setLastName(newVal.getLastName());
			existingTeacher.setEmail(newVal.getEmail());
			existingTeacher.setMobno(newVal.getMobno());
			existingTeacher.setAddress(newVal.getAddress());
			existingTeacher.setQualification(newVal.getQualification());
			existingTeacher.setTeaching_subject(newVal.getTeaching_subject());
			existingTeacher.setTeachingType(newVal.getTeachingType());
			
			teac_Repo.save(existingTeacher);
			return existingTeacher;
		}
		else {
			return null;
		}
	}

	@Override
	public void deleteTeacherById(int teacherId) {
		Optional<Teacher> tec = teac_Repo.findById(teacherId);
		if(tec.isPresent()) {
			teac_Repo.deleteById(teacherId);
		}	
	}
}