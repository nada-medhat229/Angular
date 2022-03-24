import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  constructor(public studentService:StudentService) { }
students:Students[]=[];
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(a=>this.students=a);
  }

}
