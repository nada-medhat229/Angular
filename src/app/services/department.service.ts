import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, toArray } from 'rxjs';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseurl:string="http://localhost:8080/department/";
  getAllDepartment(){
      return this.http.get<Department[]>(this.baseurl);
  }
  getDepartmentById(id:number){
    return this.http.get<Department>(this.baseurl+id);
  }
  addDepartment(dept:Department){
    return this.http.post<Department>(this.baseurl,dept);
  }
  updateDepartment(dept:Department){
    return this.http.put<Department>(this.baseurl,dept);
  }
  deleteDepartment(_id:number){
    console.log(_id)
    return this.http.delete<Department>(this.baseurl + _id);
  }
  constructor(public http:HttpClient) { }

}
