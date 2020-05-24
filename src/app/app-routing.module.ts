import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ViewComponent } from './aboutUs/view/view.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'overview',component:ViewComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'register', component: RegistrationComponent},
  {path:'',redirectTo:'/admin',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
