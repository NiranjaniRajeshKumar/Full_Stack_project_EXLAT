import { Component,OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  teacher: Teacher = new Teacher();
  constructor(private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTeacher(){
    this.teacherService.createTeacher(this.teacher).subscribe( data =>{
      console.log(data);
      this.goToTeacherList();
    },
    error => console.log(error));
  }

  goToTeacherList(){
    this.router.navigate(['/teachers']);
  }
  
  onSubmit(){
    console.log(this.teacher);
    this.saveTeacher();
  }
}

