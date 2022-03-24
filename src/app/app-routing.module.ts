import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';

 export const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"contantus",component:ContactusComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"speaker",loadChildren:()=>import("./speakers/speakers.module").then(a=>a.SpeakersModule)},
  {path:"student",loadChildren:()=>import("./students/students.module").then(a=>a.StudentsModule),canActivate:[LoginGuard]},
  {path:"department",loadChildren:()=>import("./department/department.module").then(a=>a.DepartmentModule)},
  {path:"**",component:ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
