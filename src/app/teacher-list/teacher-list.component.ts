import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher'
import { TeacherService } from '../teacher.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: Teacher[] = [];
  firstName='';
  

  constructor(private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers(){
    this.teacherService.getTeachersList().subscribe(data => {
      this.teachers = data;

      
    });
  }

  teacherDetails(teacher_id: number){
    this.router.navigate(['teacher-details', teacher_id]);
  }

  updateTeacher(teacher_id: number){
    this.router.navigate(['update-teacher', teacher_id]);
  }

  confirmDelete(teacher : Teacher){
    var status= confirm("You want to delete this record?");
     if (status==true) {
       this.deleteTeacher(teacher.teacher_id);
          }
     
      this.getTeachers();
          
  
        }

  
  deleteTeacher(teacher_id: number){
    this.teacherService.deleteTeacher(teacher_id).subscribe( data => {
      console.log(data);
      this.getTeachers();
    })
  }

  confirmremoveAllTeachers()
  {
    var status=confirm("Are you sure want to remove all this record? once it removed cannot reback");
    if(status==true){
      this.removeAllTeachers();
    }
  }

  removeAllTeachers(): void {
    this.teacherService.deleteAll().subscribe(
      data => {
        console.log(data);
      },
      error =>{
        console.log(error);
      }

    );
  }

  searchByName(){
    this.teacherService.findByName(this.firstName)
    .subscribe(
      data => {
        this.teachers = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
 
  }
  
  fetchTechTeach(){
    this.teacherService.findByteachingType().subscribe(
      data => {
        this.teachers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  fetchTechTeachSec(){
    this.teacherService.findByteachingType1().subscribe(
      data => {
        this.teachers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}

