import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components/home/home.comp';
import { ListingComponent } from './components/listing/listing.comp';
import { PostAdComponent } from './components/post-ad/post-ad.comp';
@NgModule({
  declarations: [PostAdComponent, HomeComponent, ListingComponent],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    IonicStorageModule.forRoot(),
    SharedModule
  ]
})
export class HomeModule {}
