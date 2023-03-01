import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserhomeService } from '../userhome.service';

@Component({
  selector: 'app-usercategoryupdate',
  templateUrl: './usercategoryupdate.component.html',
  styleUrls: ['./usercategoryupdate.component.css']
})
export class UsercategoryupdateComponent implements OnInit {
  book={

    category:'',
    description:'',
    remark:''
  }

  constructor(private addcourseservice:UserhomeService,private router:Router) { }

  ngOnInit(): void {

     let bookId = localStorage.getItem("editBookId");
    //console.log(bookId);
    this.addcourseservice.getcategoryupdateID(bookId).subscribe((data:any)=>{
    this.book=JSON.parse(JSON.stringify(data));
  })
}
editBook()
{    
  this.addcourseservice.editadmincategory(this.book);   
  alert("Success");
  this.router.navigate(['userhome/usercatlist']);
}

}
