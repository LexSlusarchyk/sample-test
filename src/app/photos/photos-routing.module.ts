import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PhotoComponent } from './components/photo/photo.component';

const photosRoutes: Routes = [
  {
    path: '',
    component: PhotosComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'photo/:id',
    component: PhotoComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(photosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PhotosRoutingModule {}
