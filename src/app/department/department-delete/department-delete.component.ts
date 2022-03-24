import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/_models/department';


@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit,OnChanges {
  // @Input()
  deptId:number=0;
  dept:Department|null=null;
    constructor(public departmentservice:DepartmentService,public activateRoute:ActivatedRoute) { }
    ngOnChanges(changes: SimpleChanges): void {
      // if(!changes['deptId'].isFirstChange())
      // this.departmentservice.deleteDepartment(this.deptId).subscribe(
      //   a=>console.log(a))
      }

    ngOnInit(): void {
      this.activateRoute.params.subscribe(a=>{
        this.departmentservice.deleteDepartment(a['id']).subscribe(
            a=>console.log(a))

      })
    }
}
