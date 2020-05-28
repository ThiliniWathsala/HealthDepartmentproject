import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ViewComponent } from './aboutUs/view/view.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {ImagesComponent} from './images/images.component';
import {ImageComponent} from './images/image/image.component';
import {ImageListComponent} from './images/image-list/image-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'overview',component:ViewComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'register', component: RegistrationComponent},
  {path:'images',component:ImagesComponent,children:[
      {path:'upload',component:ImageComponent},
      {path:'list',component:ImageListComponent}
    ]},
  {path:'',redirectTo:'/admin',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
