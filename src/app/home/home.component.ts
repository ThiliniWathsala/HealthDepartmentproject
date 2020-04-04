import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flower1:String = "assets/Images/flower1.jfif"; 
  flower2:String = "assets/Images/flower2.jpg"; 
  flower3:String = "assets/Images/flower3.jpg"; 
 
 
  news:String[]=[];

 
  constructor() { }


  ngOnInit() { 
    this.news=["{today corona patients=156}","{yesterday corona patients = 142}"];
  }
 
  

  

}
