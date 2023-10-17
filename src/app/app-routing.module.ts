import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ProductsComponent } from './components/products/list/products.component';
import { ViewProductDetailsComponent } from './components/products/view-product-details/view-product-details.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { ViewFotoDetailsComponent } from './components/view-foto-details/view-foto-details.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'404', component:NotFound404Component},
  {path:'users',component:UsersListComponent},
  {path:'products',component:ProductsComponent},
  { path: 'products/:id', component: ViewProductDetailsComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'fotos/:id', component: ViewFotoDetailsComponent },
  { path: 'auth/signin', component:LoginComponent},
  {path:'**', redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
