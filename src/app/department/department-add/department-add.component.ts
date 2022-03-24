import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit,OnDestroy {
  newDepartment:Department=new Department(0,"","");
subscript:Subscription|null=null;
  add(){
    this.departmentservice.addDepartment(this.newDepartment).subscribe(
      a=>
      {
        console.log(a);
      this.router.navigate(['/department'])
    }
    )
  }
  constructor(public departmentservice:DepartmentService,public router:Router) { }
  ngOnDestroy(): void {
    this.subscript?.unsubscribe();
  }

  ngOnInit(): void {
  }

}
