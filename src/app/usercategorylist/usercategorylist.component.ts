import { Component, OnInit } from '@angular/core';
import { UserhomeService } from '../userhome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercategorylist',
  templateUrl: './usercategorylist.component.html',
  styleUrls: ['./usercategorylist.component.css']
})
export class UsercategorylistComponent implements OnInit {
  books: any;
  data: any;


  constructor(private courseservice:UserhomeService,private router:Router) { }

  ngOnInit(): void {

    this.courseservice.getCourseCtegory().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }

  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['usercatupdate']);

  }

  deleteBook(book:any)
  {
    this.courseservice.deletecategoryadmin(book._id)
      .subscribe((data) => {
        this.books = this.data.filter((p:any) => p !== book)
      })
  
     }

}
