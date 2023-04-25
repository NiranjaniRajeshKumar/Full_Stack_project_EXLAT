import { Component,OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  teacher_id: number = 0;
  teacher: Teacher = new Teacher();
  constructor(private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.teacher_id = this.route.snapshot.params['teacher_id'];

    this.teacherService.getTeacherById(this.teacher_id).subscribe(data => {
      this.teacher = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.teacherService.updateTeacher(this.teacher_id, this.teacher).subscribe( data =>{
      this.goToTeacherList();
    }
    , error => console.log(error));
  }

  goToTeacherList(){
    this.router.navigate(['/teachers']);
  }
}
