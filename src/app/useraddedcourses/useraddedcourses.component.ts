import { Component, OnInit } from '@angular/core';
import { UserhomeService } from '../userhome.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-useraddedcourses',
  templateUrl: './useraddedcourses.component.html',
  styleUrls: ['./useraddedcourses.component.css']
})
export class UseraddedcoursesComponent implements OnInit {
  title:String="Course Enrolled"
  productItem= {
     
    course:'',
    category:'',
    description:'',
    faculty:'',
    rating:'',
    //imageurl:''
   }
  cats: any;

  constructor(private courseservice:UserhomeService, private router:Router) { }

  ngOnInit(): void {
    this.courseservice.getCourseCtegory().subscribe((data: any)=>{
      this.cats=JSON.parse(JSON.stringify(data));

    })
  }

  AddProduct()
  {    
    //  console.log(this.productItem);
    this.courseservice.newCourse(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['userhome/useraddedcourselist']);
  }



}
