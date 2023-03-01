import { Component, OnInit } from '@angular/core';
import { AddcourseserviceService } from '../addcourseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincoursecategoryupdate',
  templateUrl: './admincoursecategoryupdate.component.html',
  styleUrls: ['./admincoursecategoryupdate.component.css']
})
export class AdmincoursecategoryupdateComponent implements OnInit {

  constructor(private addcoursesservice:AddcourseserviceService, private router:Router) { }

  
  book={

    category:'',
    description:'',
    remark:''
  }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    //console.log(bookId);
    this.addcoursesservice.getcategoryupdateID(bookId).subscribe((data:any)=>{
    this.book=JSON.parse(JSON.stringify(data));
  })

  }

  editBook()
  {    
    this.addcoursesservice.editadmincategory(this.book);   
    alert("Success");
    this.router.navigate(['adminhome/categorylist']);
  }

}
