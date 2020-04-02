import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  teleNo1:String= "0114567895";
  teleNo2:String= "0114567896";
  addess_No: String = "250/4";
  addres_city:String="health Deparment";
  address_street:String="Moneragala";
  fb: String ="assets/Images/fb.png";
  email: String ="twathsala@gmail.com";
  date1 : String= "01/02/2021";
  
  constructor() { }

  ngOnInit() {
  }

}
