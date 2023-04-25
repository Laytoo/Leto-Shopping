import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  filteredproducts:ProductModel[]=[];
  showSkeleton:boolean;
  touched:boolean;
  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  search(ev:any){
    this.touched=false;
    this.filteredproducts=[];
    this.showSkeleton=true;
    this.productService.searchProducts(ev.target.value).subscribe((prods:ProductModel[])=>{
      if(prods.length<=0){
        this.touched=true;
      }else{
        this.touched=false;
      }
      this.showSkeleton=false;
      this.filteredproducts=prods;
    },err=>console.log(err));


  }

}
