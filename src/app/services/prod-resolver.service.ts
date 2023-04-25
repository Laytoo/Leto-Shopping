import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,Resolve } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProdResolverService implements Resolve<any> {

  constructor(private productService:ProductService,
    private loadingCtrl:LoadingController) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

      const id = route.params.id;

      return this.productService.getProduct(id).pipe(
          tap(async () => {
              if (await this.loadingCtrl.getTop()) {
                  this.loadingCtrl.dismiss().then();
              }
          })
      );
  }
}
