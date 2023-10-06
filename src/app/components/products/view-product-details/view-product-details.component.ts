import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/domain/Product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {

  product:Product;

  constructor(
    private route: ActivatedRoute, // Describe the current route 
    private router:Router, // Allows to go to another route.
    private productService:ProductService
    ){
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(Number(id)).subscribe((product:Product)=>{
      this.product = product;
    })
  }

}
