import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { StudentService } from 'src/app/services/student.service';
import { Department } from 'src/app/_models/department';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent implements OnInit,OnChanges {

  @Input() studentId=0;
student:Students=new Students(0,"",0,"","","")
department:Department[]=[];
file:any;
  constructor(public departmentService:DepartmentService,public studentservice:StudentService) { }

  ngOnInit(): void {
this.departmentService.getAllDepartment().subscribe(
  a=>this.department=a
)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log( this.studentId);

    if(!changes['studentId'].isFirstChange())
    this.studentservice.getStudentById(this.studentId).subscribe(
      a=>console.log(this.student=a)
      )
  }

  onFileChange(s:any){
this.file=s.target.files[0]
  }
  save(){
    this.studentservice.updateStudent(this.student,this.file).subscribe(
      a=>console.log(a)
    )
  }
}
