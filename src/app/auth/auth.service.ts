import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authError:any;

  private eventAuthError = new BehaviorSubject<string>("")
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser:any;

  constructor(public afAuth: AngularFireAuth,private db:AngularFirestore,private router:Router) {}

  getUserState(){
    return this.afAuth.authState;  //return all the information of currently logged in user
  }

  login(email:string,password:string){
    this.afAuth.signInWithEmailAndPassword(email,password)
      .catch(error=>{
        this.eventAuthError.next(error);
        this.router.navigate(['/login']);
      })
      .then(userCredencial => {
        if(userCredencial){
          this.router.navigate(['/admin']);
        }
      })
  }


  createUser(user) {
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredencial=>{  // abouve fuction return thr user infomtion and using credencial we can capture the datails. normaly return the user ID
        this.newUser=user;
        console.log(userCredencial);
        userCredencial.user.updateProfile({
          displayName: user.firstName + '' + user.lastName
        });
        this.insertUserData(userCredencial)
          .then(()=>{
            this.router.navigate(['/admin']);
          });
      })
      .catch( error =>{
        this.eventAuthError.next(error);
      })
  }


  insertUserData(userCredential:firebase.auth.UserCredential){
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email:this.newUser.email,
      firstname:this.newUser.firstName,
      lastname:this.newUser.lastName,
      role:'admin'
    })
  }

  logout(){
    this.router.navigate(['/login']);
    return this.afAuth.signOut();

  }




}
