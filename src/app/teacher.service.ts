import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseURL = "http://localhost:8080/api/v1/teachers";

  constructor(private httpClient: HttpClient) { }
  
  getTeachersList(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${this.baseURL}`);
  }

  createTeacher(teacher: Teacher): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, teacher);
  }

  getTeacherById(teacher_id: number): Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.baseURL}/${teacher_id}`);
  }

  updateTeacher(teacher_id: number, teacher: Teacher): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${teacher_id}`, teacher);
  }

  //localhost:4200/delete/5
  deleteTeacher(teacher_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${teacher_id}`);
  }

  deleteAll():Observable<any>
  {
    return this.httpClient.delete(`${this.baseURL}`);
  }

  findByName(name: any): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(`${this.baseURL}?name=${name}`);
  }

  findByteachingType(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${this.baseURL}/primaryTeach`);
  }
  findByteachingType1(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${this.baseURL}/secondaryTeach`);
  }


}