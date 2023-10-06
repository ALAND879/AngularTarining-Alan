import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/domain/Product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor(private router: Router) {}

  goToDetails(id: number) {
    this.router.navigate(['products/', id]);
  }
}
