import { Component, OnInit } from '@angular/core';
import { AddcourseserviceService } from '../addcourseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincourseupdate',
  templateUrl: './admincourseupdate.component.html',
  styleUrls: ['./admincourseupdate.component.css']
})
export class AdmincourseupdateComponent implements OnInit {

  productItem= {
     
    course:'',
    category:'',
    description:'',
    faculty:'',
    rating:'',
    //imageurl:''
   }
  cats: any;

  constructor(private courseservice:AddcourseserviceService, private router:Router) { }

  ngOnInit(): void {

    
    this.courseservice.getCourseCtegory().subscribe((data: any)=>{
      this.cats=JSON.parse(JSON.stringify(data));

    })
   

    let productId = localStorage.getItem("editProductId");
    this.courseservice.getcourseupdateID(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }

  editProduct()
  {    
    this.courseservice.editadmincourse(this.productItem);   
    alert("Success");
    this.router.navigate(['adminhome/adminaddedcourselist']);
  }
  }


