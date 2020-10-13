import { Component, OnInit } from '@angular/core';
import { PhotosList } from '../../models/photosList';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  photosList = new PhotosList();

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.loadFavoritesPhotos();
  }

  public loadFavoritesPhotos() {
    this.photosList.init(this.photosService.getFavoritesList());
  }

}
