import { Component, OnInit } from '@angular/core';
import { AddcourseserviceService } from '../addcourseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminaddedcourses',
  templateUrl: './adminaddedcourses.component.html',
  styleUrls: ['./adminaddedcourses.component.css']
})
export class AdminaddedcoursesComponent implements OnInit {
  cats: any;
  constructor(private addcoursesservice:AddcourseserviceService, private router:Router) { }

  productItem= {
     
    course:'',
    category:'',
    description:'',
    faculty:'',
    rating:'',
   // imageurl:''
   }

  ngOnInit(): void {

    this.addcoursesservice.getCourseCtegory().subscribe((data: any)=>{
      this.cats=JSON.parse(JSON.stringify(data));

    })
  }

  AddProduct()
  {    
    //  console.log(this.productItem);
    this.addcoursesservice.newCourse(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['adminhome/adminaddedcourselist']);
  }

}
