import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './aboutUs/view/view.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './auth/login/login.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './auth/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainPageComponent,
    FooterComponent,
    HomeComponent,
    ViewComponent,
    AdminLoginComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
