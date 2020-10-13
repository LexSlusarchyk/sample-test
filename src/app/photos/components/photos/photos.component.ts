import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { PhotosList } from '../../models/photosList';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photosList: PhotosList;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;

  constructor(private photosService: PhotosService) {
    this.photosList = this.photosService.photosList;
  }

  ngOnInit() {
  }

  public onPhotoCLicked(photo: Photo) {
    this.photosService.addPhotoToFavorites(photo);
  }

  public onScrollDown() {
    this.photosService.loadPhotos();
  }


}
