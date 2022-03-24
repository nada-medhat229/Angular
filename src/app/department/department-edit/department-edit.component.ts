import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit,OnChanges {
  // @Input() deptId=0
  department:Department=new Department(0,"","");
   constructor(public departmentservice:DepartmentService,public activateRoute:ActivatedRoute) { }
   ngOnChanges(changes: SimpleChanges): void {
    //  if(!changes['deptId'].isFirstChange()){
    //    this.departmentservice.getDepartmentById(this.deptId).subscribe(a=>this.department=a)
    //  }
   }
   save(){
     this.departmentservice.updateDepartment(this.department).subscribe(a=>console.log(a));
   }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(a=>{
      this.departmentservice.getDepartmentById(a['id']).subscribe(
          D=>this.department=D,
        );
    })
  }

}
