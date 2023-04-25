import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product:ProductModel;
  showData=false;
  constructor(private route:ActivatedRoute,
    private productService:ProductService) { }

  ngOnInit() {

    this.route.data.subscribe((data: { product: ProductModel }) => {
      this.product = data.product;
      this.showData = true;

    });
  }

}
