import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit,OnDestroy {
  deleteId=0;
  detailsId=0;
  editId=0;
  depts:Department[]=[];
subscript:Subscription|null=null;
  constructor(public departmentservice:DepartmentService) { }
  ngOnDestroy(): void {
    this.subscript?.unsubscribe();
  }

ngOnInit(): void {
  this.subscript=this.departmentservice.getAllDepartment().subscribe(a=>console.log(this.depts=a)
   )
}

}
