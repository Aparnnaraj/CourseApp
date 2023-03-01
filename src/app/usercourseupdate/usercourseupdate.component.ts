import { Component, OnInit } from '@angular/core';
import { UserhomeService } from '../userhome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercourseupdate',
  templateUrl: './usercourseupdate.component.html',
  styleUrls: ['./usercourseupdate.component.css']
})
export class UsercourseupdateComponent implements OnInit {
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
   

    let productId = localStorage.getItem("editProductId");
    this.courseservice.getcourseupdateID(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })

  }
  editProduct()
  {    
    this.courseservice.editadmincourse(this.productItem);   
    alert("Success");
    this.router.navigate(['userhome/useraddedcourselist']);
  }

}
