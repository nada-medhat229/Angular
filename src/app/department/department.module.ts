import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
{path:"",component:DepartmentListComponent,children:[
  {path:"details/:id",component:DepartmentDetailsComponent},
  {path:"edit/:id",component:DepartmentEditComponent},
  {path:"delete/:id",component:DepartmentDeleteComponent},
]},
{path:"add",component:DepartmentAddComponent},
]

@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    DepartmentDetailsComponent,
    DepartmentDeleteComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ],
  exports: [
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    DepartmentDetailsComponent,
    DepartmentDeleteComponent
  ],
})
export class DepartmentModule { }
