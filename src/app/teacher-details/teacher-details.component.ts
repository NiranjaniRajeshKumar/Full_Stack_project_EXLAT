import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit{
teacher_id: number = 0;
    teacher: any = [];
    constructor(private route: ActivatedRoute, private teacherService: TeacherService) { }
  
    ngOnInit(): void {
      this.teacher_id = this.route.snapshot.params['teacher_id'];
      this.teacher = new Teacher();
      this.teacherService.getTeacherById(this.teacher_id).subscribe( data => {
        this.teacher = data;
      });
    }
  
  
}

