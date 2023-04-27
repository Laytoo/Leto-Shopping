import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BackendInterceptor } from './services/backend.interceptor';
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';
import { SortModalComponent } from './components/sort-modal/sort-modal.component';
import { CartViewwComponent } from './components/cart-vieww/cart-vieww.component';
import { Storage } from '@ionic/storage';



@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      FormsModule,


    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:BackendInterceptor,
    multi:true,

  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
