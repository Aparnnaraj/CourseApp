import { Component, OnInit } from '@angular/core';
import { UserhomeService } from '../userhome.service';
import { Router } from '@angular/router';
import { UserhomeComponent } from '../userhome/userhome.component';

@Component({
  selector: 'app-useraddedcourselist',
  templateUrl: './useraddedcourselist.component.html',
  styleUrls: ['./useraddedcourselist.component.css']
})
export class UseraddedcourselistComponent implements OnInit {

  //imageWidth: number = 50;
  //imageMargin: number = 2;
  //showImage: boolean = false

  products=[ {
     
    course:'',
    category:'',
    description:'',
    faculty:'',
    rating:'',
   // imageurl:''
   }]

  // toggleImage(): void{
  //  this.showImage = !this.showImage;
  //}

  constructor(private courseservice: UserhomeService, private router:Router) { }

  ngOnInit(): void {

    
    this.courseservice.getadminCourse().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }

  
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['usercourseupdate']);

  }
  deleteProduct(product:any)
  {
    this.courseservice.deletecourseadmin(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
  

 }

}
