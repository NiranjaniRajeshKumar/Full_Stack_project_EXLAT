package com.example.demo.TeacherservInter;


import java.util.List;

import com.example.demo.model.Teacher;

public interface TeacherServ {

	Teacher saveTeacher(Teacher tec);
	List<Teacher>  getTeachersFromDb();
	Teacher getTeacherById(int teacherId);
	Teacher updateTeacherDetails(Teacher tec, int teacherId);
	void deleteTeacherById(int teacherId);
}

