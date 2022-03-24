import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { StudentService } from 'src/app/services/student.service';
import { Department } from 'src/app/_models/department';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent implements OnInit {
student:Students=new Students(0,"",0,"","","")
department:Department[]=[];
file:any;
  constructor(public departmentService:DepartmentService,public studentservice:StudentService) { }

  ngOnInit(): void {
this.departmentService.getAllDepartment().subscribe(
  a=>this.department=a
)
  }
  onFileChange(s:any){
this.file=s.target.files[0]
  }
  add(){
    this.studentservice.addStudent(this.student,this.file).subscribe(a=>console.log(a))
  }
// show(){
//   this.studentservice.showdetail().subscribe(a=>a)
// }
}
