import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthGaurdService} from './auth-gaurd.service';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'teachers', component: TeacherListComponent,canActivate:[AuthGaurdService] },
  {path: 'create-teacher', component: CreateTeacherComponent,canActivate:[AuthGaurdService] },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'update-teacher/:teacher_id', component: UpdateTeacherComponent,canActivate:[AuthGaurdService] },
  {path: 'teacher-details/:teacher_id', component: TeacherDetailsComponent,canActivate:[AuthGaurdService] },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]  },
  { path: 'home', component: HomeComponent  },
  { path:'signin',component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }