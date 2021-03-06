import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderlistComponent } from './admin/orderlist/orderlist.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: 'admin', component:DashboardComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'productedit', component: ProductEditComponent },
  { path: 'orderlist', component: OrderlistComponent },
  { path: 'nav', component: AdminNavComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
