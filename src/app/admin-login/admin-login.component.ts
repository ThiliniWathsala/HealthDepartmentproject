import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  user:firebase.User;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe(user=>{
        this.user=user;
      })
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
