import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  image:String="assets/cmslogo.png"
  images = ['../../assets/cms2.jpg','../../assets/cms3.jpg','../../assets/cms4.jpg'];

}
