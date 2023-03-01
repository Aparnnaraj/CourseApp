import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { AdminComponent } from './admin/admin.component';
import { AdminaddedcoursesComponent } from './adminaddedcourses/adminaddedcourses.component';
import { AdmincoursecategoryupdateComponent } from './admincoursecategoryupdate/admincoursecategoryupdate.component';
import { AdmincourselistComponent } from './admincourselist/admincourselist.component';
import { AdmincourseupdateComponent } from './admincourseupdate/admincourseupdate.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AuthGuard } from './auth.guard';
import { CoursecategorylistComponent } from './coursecategorylist/coursecategorylist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UseraddedcategoryComponent } from './useraddedcategory/useraddedcategory.component';
import { UseraddedcourselistComponent } from './useraddedcourselist/useraddedcourselist.component';
import { UseraddedcoursesComponent } from './useraddedcourses/useraddedcourses.component';
import { UseradminhomeComponent } from './useradminhome/useradminhome.component';
import { UsercategorylistComponent } from './usercategorylist/usercategorylist.component';
import { UsercategoryupdateComponent } from './usercategoryupdate/usercategoryupdate.component';
import { UsercourseupdateComponent } from './usercourseupdate/usercourseupdate.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'' , component:HomeComponent},
{path:'signup' , component:SignupComponent},
{path:'login' , component:LoginComponent},
{path:'userhome' , canActivate:[AuthGuard] , component:UserhomeComponent , 
children:[{path:'useraddcategory' , component:UseraddedcategoryComponent} ,
 {path:'usercatlist' , component:UsercategorylistComponent} , 
 {path:'useraddedcourse' , component: UseraddedcoursesComponent} , 
{path:'useradddedcourselist' , component:UseraddedcourselistComponent}]} , 
{path:'usercatupdate' , component:UsercategoryupdateComponent} , 
{path:'usercourseupdate' , component:UsercourseupdateComponent} , 
{path:'useradminhome' , component:UseradminhomeComponent} , 
{path:'admincourseupdate' , component:AdmincourseupdateComponent} , 
{path:'admincoursecategoryupdate' , component:AdmincoursecategoryupdateComponent} , 
{path:'adminhome' , component:AdminhomeComponent , canActivate:[AuthGuard] , 
children:[{path:'Regusers' , component:UsersComponent} , 
{path:'admin' , component:AdminComponent} , 
{path:'courses' , component:AddcoursesComponent} , 
{path:'adminaddedcourses' ,canActivate:[AuthGuard] , component:AdminaddedcoursesComponent} , 
{path:'categorylist' , component:CoursecategorylistComponent} , 
{path:'adminaddedcourselist' , component:AdmincourselistComponent}
]} , 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
