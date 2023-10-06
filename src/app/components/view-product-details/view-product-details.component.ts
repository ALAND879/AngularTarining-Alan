import { Component } from '@angular/core';
import { Products } from 'src/app/Core/products';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {

  product: Products;

  constructor(
    
    private route: ActivatedRoute,  //Indica la ruta actual
    private router: Router,   //Permite ir a otra ruta :D
    private productService:ProductService,
  ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(Number(id)).subscribe((product: Products) => {
      this.product =  product;
    })
  }

}
