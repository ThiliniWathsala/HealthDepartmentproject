import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';


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
    RegistrationComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule , // for realtime database
    ReactiveFormsModule,   // for reactive forms to upload images
    FormsModule
  ],
  providers: [AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
