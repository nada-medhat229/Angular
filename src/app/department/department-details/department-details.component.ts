import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit,OnChanges {

  // @Input() deptId:number=0;
  deptId:number=0;
  department:Department|null=null;
  constructor(public departmentservice:DepartmentService,public activateRoute:ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {
    // if(!changes['deptId'].isFirstChange())
    // this.departmentservice.getDepartmentById(this.deptId).subscribe(
    //   a=>this.department=a,
    // );
  }

  ngOnInit(): void {
    //Changes can be noticed
    this.activateRoute.params.subscribe(a=>{
      this.departmentservice.getDepartmentById(a['id']).subscribe(
          a=>this.department=a,
        );
    })

    //Changes can not be noticed
      // this.departmentservice.getDepartmentById(this.activateRoute.snapshot.params['id']).subscribe(
      //     a=>this.department=a,
      //   );
  }

}
