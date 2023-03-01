import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddcourseserviceService {

  constructor(private http: HttpClient) { }
  newUser(course:any){

    return this.http.post("http://localhost:3000/admin/addcoursecategory",course)
   
    .subscribe(data=>{alert(data)})

  }
  getCourseCtegory()
  {
    return this.http.get("http://localhost:3000/admin/coursecategorys");
  }
  getcategoryupdateID(id:any){
   
    return this.http.get("http://localhost:3000/admin/coursecategory"+id);
  
}
editadmincategory(book:any){
  return this.http.put("http://localhost:3000/admin/categoryupdate",book)
  .subscribe(data =>{console.log(data)})
}
deletecategoryadmin(id:any)
{
   return this.http.delete("http://localhost:3000/admin/categoryremove/"+id)
 }
 newCourse(course:any){

  console.log(course)

  return this.http.post("http://localhost:3000/admin/addcourse",course)
 
  .subscribe(data=>{alert(data)})


 }
 getadminCourse()
 {
   return this.http.get("http://localhost:3000/admin/admincourses");
 }

 getcourseupdateID(id:any){
 
  return this.http.get("http://localhost:3000/admin/admincourse"+id);

}
editadmincourse(book:any){
  return this.http.put("http://localhost:3000/admin/admincourseupdate",book)
  .subscribe(data =>{console.log(data)})
}


deletecourseadmin(id:any)
  {
     return this.http.delete("http://localhost:3000/admin/admincourseremove/"+id)
   }

 display(id:any){

    //console.log("category"+bookid)
    return this.http.get("http://localhost:3000/admin/selectcategory"+id);
   }

  }