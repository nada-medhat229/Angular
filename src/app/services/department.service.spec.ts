import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule,HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { DepartmentService } from "./department.service";
import { Observable, Subscription, toArray } from 'rxjs';

describe('login service',()=>{
  let department:DepartmentService;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DepartmentService],
    });
    department=TestBed.inject(DepartmentService);
  });
  it('testing for all dept',()=>{
    let array=[
      {_id: 1, name: 'sd', location: 'Smart'}
  , {_id: 2, name: 'El', location: 'Alex'}
   ,{_id: 3, name: 'DB', location: 'Mansoura'}
    ];
 department.getAllDepartment().subscribe(a=>expect(a).toEqual(array));
  })
})
