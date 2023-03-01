import { Component, OnInit } from '@angular/core';
import { AddcourseserviceService } from '../addcourseservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  books: any;
  book:any;
  categorysel:any;
  image:String="assets/boy.jpg"
  coursedatas: any;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false

  toggleImage(): void{
    this.showImage = !this.showImage;
  }


  constructor(private courseservice:AddcourseserviceService, private router:Router ) { }

  ngOnInit(): void {
    this.courseservice.getCourseCtegory().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })

  }

  display(book:any){

    // alert(book.category) ;
     this.categorysel=book.category;
     this.courseservice.display(this.categorysel).subscribe((data)=>{
       this.coursedatas=JSON.parse(JSON.stringify(data));
       //console.log("food datas"+this.fooddatas.category);
   })
   
   
     }

}
