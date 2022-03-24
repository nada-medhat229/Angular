import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { SpeakersModule } from './speakers/speakers.module';
import { StudentsModule } from './students/students.module';
import { DepartmentModule } from './department/department.module';
import { LoggenInterceptor } from './interceptors/loggen.interceptor';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './_models/core/core.module';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { ConvertpipePipe } from './convertpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    ErrorComponent,
    ConvertpipePipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,CoreModule,AppRoutingModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoggenInterceptor,multi:true},
    {provide:"baseUrl",useValue:"http://localhost:8080/"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
