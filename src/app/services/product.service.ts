import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url : string=environment.backend_api_url;

  constructor(public httpclient:HttpClient) { }

  // getAllProducts(pageNumber:number=1):Observable<ProductModel[]>{
  //   return this.httpclient.get<ProductModel[]>(`${this.url}/products?page=${pageNumber}&per_page=10&consumer_key=${environment.readonlykeys.consumer_key}&consumer_secret=${environment.readonlykeys.consumer_secret}`);
  // }

  getAllProducts(pageNumber:number=1):Observable<ProductModel[]>{
    console.log(pageNumber);

    return this.httpclient.get<ProductModel[]>(`${this.url}/products?page=${pageNumber}&per_page=10`);
  }

  getProduct(id:number):Observable<ProductModel>{
    return this.httpclient.get<ProductModel>(`${this.url}/products/${id}`);

  }

  searchProducts(keyword:string):Observable<ProductModel[]>{
    return this.httpclient.get<ProductModel[]>(`${this.url}/products?search=${keyword}`);

  }

  getAllCategories(){
    return this.httpclient.get(`${this.url}/products/categories?per_page=100&hide_empty=true&parent=0`).toPromise();
  }
}
