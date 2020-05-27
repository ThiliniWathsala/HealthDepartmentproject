import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Event, Router,NavigationStart,NavigationEnd} from '@angular/router';
import {timeInterval} from 'rxjs/operators';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  user:firebase.User;
  isLoading;
  constructor(private auth:AuthService, private router:Router) {

  }

  ngOnInit() {


    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.isLoading=true;
      }
      if(routerEvent instanceof NavigationEnd){
        this.isLoading=false;
      }
    });

    this.auth.getUserState()
      .subscribe(user=>{
        this.user=user;
      });
  }

  login(){
    this.router.navigate(['/login']);
  }
  logout(){
    this.auth.logout();
  }
  register(){

    this.router.navigate(['/register']);

  }

}
