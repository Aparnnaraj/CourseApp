import { Component, OnInit } from '@angular/core';
import { AddcourseserviceService } from '../addcourseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincourselist',
  templateUrl: './admincourselist.component.html',
  styleUrls: ['./admincourselist.component.css']
})
export class AdmincourselistComponent implements OnInit {

  //imageWidth: number = 50;
  //imageMargin: number = 2;
  //showImage: boolean = false

  products=[ {
     
    course:'',
    category:'',
    description:'',
    faculty:'',
    rating:'',
    //imageurl:''
   }]

   //toggleImage(): void{
    //this.showImage = !this.showImage;
  //}

  constructor(private courseservice:AddcourseserviceService, private router:Router) { }

  ngOnInit(): void {
    this.courseservice.getadminCourse().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })

  }

  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['admincourseupdate']);

  }
  deleteProduct(product:any)
  {
    this.courseservice.deletecourseadmin(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
  

 }


}
