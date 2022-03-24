import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { StudentdeleteComponent } from './studentdelete/studentdelete.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
{path:"",component:StudentlistComponent},
  {path:"details/:id",component:StudentdetailComponent},
  {path:"edit/:id",component:StudenteditComponent},
  {path:"delete/:id",component:StudentdeleteComponent},
{path:"add",component:StudentaddComponent},
]
@NgModule({
  declarations: [
    StudentlistComponent,
    StudentaddComponent,
    StudenteditComponent,
    StudentdetailComponent,
    StudentdeleteComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ],
  exports: [
    StudentlistComponent,
    StudentaddComponent,
    StudenteditComponent,
    StudentdetailComponent,
    StudentdeleteComponent
  ],
})
export class StudentsModule { }
