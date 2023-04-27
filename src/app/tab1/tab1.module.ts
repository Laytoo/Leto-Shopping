import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SwiperModule } from 'swiper/angular';
import { SortModalComponent } from '../components/sort-modal/sort-modal.component';
import { FilterMenuComponent } from '../components/filter-menu/filter-menu.component';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SwiperModule,
    



  ],
  declarations: [Tab1Page,SortModalComponent,FilterMenuComponent,]
})
export class Tab1PageModule {}
