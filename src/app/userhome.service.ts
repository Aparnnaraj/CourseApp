import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserhomeService {

  constructor(private http:HttpClient) { }

  newUser(course:any){

    return this.http.post("http://localhost:3000/userad/addcoursecategory",course)
   
    .subscribe(data=>{alert(data)})
  
  }

  getCourseCtegory()
{
  return this.http.get("http://localhost:3000/userad/coursecategorys");
}

getcategoryupdateID(id:any){
 
  return this.http.get("http://localhost:3000/userad/coursecategory"+id);

}

editadmincategory(book:any){
  return this.http.put("http://localhost:3000/userad/categoryupdate",book)
  .subscribe(data =>{console.log(data)})
}

deletecategoryadmin(id:any)
{
   return this.http.delete("http://localhost:3000/userad/categoryremove/"+id)
 }


 newCourse(course:any){

  console.log(course)

  return this.http.post("http://localhost:3000/userad/addcourse",course)
 
  .subscribe(data=>{alert(data)})
}

getadminCourse()
{
  return this.http.get("http://localhost:3000/userad/admincourses");
}

getcourseupdateID(id:any){

 return this.http.get("http://localhost:3000/userad/admincourse"+id);

}

editadmincourse(book:any){
  return this.http.put("http://localhost:3000/userad/admincourseupdate",book)
  .subscribe(data =>{console.log(data)})
  }
  
  
  deletecourseadmin(id:any)
  {
     return this.http.delete("http://localhost:3000/userad/admincourseremove/"+id)
   }
}
