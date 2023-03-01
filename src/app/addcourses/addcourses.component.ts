import { Component, OnInit } from '@angular/core';
import { AddcourseserviceService } from '../addcourseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent implements OnInit {

  title:String="Course Type"
  book={

    category:'',
    description:'',
    remark:''
  }


  constructor(private courseservice:AddcourseserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  addUser()
  {
    this.courseservice.newUser(this.book);
    alert("Added")
    this.router.navigate(['adminhome/course']);
  }

}
