import { Component, OnInit } from '@angular/core';
import { AddcourseserviceService } from '../addcourseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursecategorylist',
  templateUrl: './coursecategorylist.component.html',
  styleUrls: ['./coursecategorylist.component.css']
})
export class CoursecategorylistComponent implements OnInit {

  books: any;
  data: any;

  constructor(private courseservice:AddcourseserviceService, private router:Router) { }

  ngOnInit(): void {

    this.courseservice.getCourseCtegory().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }

  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['admincoursecategoryupdate']);

  }

  deleteBook(book:any)
  {
    this.courseservice.deletecategoryadmin(book._id)
      .subscribe((data) => {
        this.books = this.data.filter((p:any) => p !== book)
      })
  
     }

}
