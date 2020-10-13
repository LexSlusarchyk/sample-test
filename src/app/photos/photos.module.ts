import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './components/photos/photos.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoThumbnailComponent } from './components/photo-thumbnail/photo-thumbnail.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LayoutModule } from '../layout/layout.module';
import { MaterialModule } from '../layout/material.module';



@NgModule({
  declarations: [
    PhotosComponent,
    FavoritesComponent,
    PhotoComponent,
    PhotoThumbnailComponent,
    PhotosListComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    MaterialModule,
    LayoutModule,
    InfiniteScrollModule
  ]
})
export class PhotosModule { }
