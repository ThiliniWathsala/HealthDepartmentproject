import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  logo: String = "assets/Images/logo.png"; 
  heading: String= "assets/Images/heading.png";
  sky: String= "assets/Images/sky.jpg";
  home:String = "assets/Images/logoa.png"; 

  constructor() { }

  ngOnInit() {
  }

}
