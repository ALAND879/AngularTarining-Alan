import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Core/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  constructor(private productService:ProductService, private router:Router,
    ){
      this.getAllProducts();
    }
  products:Products[];

  getAllProducts(){
    this.productService.getAllProducts().subscribe((data)=>{
      this.products = data;
    });
  }
  goToDetails(id:number) {
    this.router.navigate(['products/',id])
  }

}
