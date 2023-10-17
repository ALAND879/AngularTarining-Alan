import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/list/products.component';
import { ViewProductDetailsComponent } from './components/products/view-product-details/view-product-details.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { ViewFotoDetailsComponent } from './components/view-foto-details/view-foto-details.component';
import { LoginComponent } from './Pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NotFound404Component,
    UsersListComponent,
    ProductsComponent,
    ViewProductDetailsComponent,
    ProductCardComponent,
    FotosComponent,
    ViewFotoDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
