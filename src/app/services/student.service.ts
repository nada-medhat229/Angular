import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Students } from '../_models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getAllStudents(){
    return this.http.get<Students[]>(this.baseUrl);
  }
  getStudentById(_id:number){
    console.log(_id)
    return this.http.get<Students>(this.baseUrl+_id);
  }
  addStudent(Student:Students,file:File){
    let data:FormData=new FormData();
    data.append("_id",Student._id.toString());
    data.append("fullName",Student.fullName);
    data.append("department",Student.department.toString());
    data.append("email",Student.email);
    data.append("password",Student.password.toString())
    data.append("image",file,file.name)
    return this.http.post<Students>(this.baseUrl, data);
  }
  updateStudent(Student:Students,file:File){
    let data:FormData=new FormData();
    data.append("_id",Student._id.toString());
    data.append("fullName",Student.fullName);
    data.append("department",Student.department.toString());
    data.append("email",Student.email);
    data.append("password",Student.password.toString())
    data.append("image",file,file.name)
    return this.http.put<Students>(this.baseUrl , data);
  }
  deleteStudent(_id:number){
    return this.http.delete<Students>(this.baseUrl + _id );
  }
  // showdetail(){
  //   let h:HttpHeaders=new HttpHeaders();
  //   h=h.append("Content-Type","multipart/form-data")
  //   h=h.append("Authorization","nada");
  //   // let p:HttpParams=new HttpParams();
  //   // p=p.append("name","nada")
  //   // p=p.append("age","22");
  //   return this.http.get(this.baseUrl,{headers:h});

  // }
  constructor(public http:HttpClient, @Inject('baseUrl') public baseUrl:string) {
    this.baseUrl+="student/"
  }
}
