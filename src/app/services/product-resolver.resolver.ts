import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverResolver implements Resolve<boolean> {
  constructor(private productService:ProductService,
    ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}
