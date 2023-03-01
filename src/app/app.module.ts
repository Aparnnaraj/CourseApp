import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { AdminaddedcoursesComponent } from './adminaddedcourses/adminaddedcourses.component';
import { AdmincoursecategoryupdateComponent } from './admincoursecategoryupdate/admincoursecategoryupdate.component';
import { AdmincourselistComponent } from './admincourselist/admincourselist.component';
import { AdmincourseupdateComponent } from './admincourseupdate/admincourseupdate.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminComponent } from './admin/admin.component';
import { CoursecategorylistComponent } from './coursecategorylist/coursecategorylist.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';
import { UseraddedComponent } from './useradded/useradded.component';
import { UseraddedcategoryComponent } from './useraddedcategory/useraddedcategory.component';
import { UseraddedcourselistComponent } from './useraddedcourselist/useraddedcourselist.component';
import { UseraddedcoursesComponent } from './useraddedcourses/useraddedcourses.component';
import { UseradminhomeComponent } from './useradminhome/useradminhome.component';
import { UsercategorylistComponent } from './usercategorylist/usercategorylist.component';
import { UsercategoryupdateComponent } from './usercategoryupdate/usercategoryupdate.component';
import { UsercourseupdateComponent } from './usercourseupdate/usercourseupdate.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { TokenIntercepterService } from './token-intercepter.service';
import { UserhomeService } from './userhome.service';
import { LoginService } from './login.service';
@NgModule({
  declarations: [
    AppComponent,
    AddcoursesComponent,
    AdminaddedcoursesComponent,
    AdmincoursecategoryupdateComponent,
    AdmincourselistComponent,
    AdmincourseupdateComponent,
    AdminhomeComponent,
    AdminComponent,
    CoursecategorylistComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UpdateusersComponent,
    UseraddedComponent,
    UseraddedcategoryComponent,
    UseraddedcourselistComponent,
    UseraddedcoursesComponent,
    UseradminhomeComponent,
    UsercategorylistComponent,
    UsercategoryupdateComponent,
    UsercourseupdateComponent,
    UserhomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//NgbModule
    FormsModule,
    HttpClientModule,

  ],
  providers: [UserhomeService,AuthGuard,LoginService , {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenIntercepterService,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
