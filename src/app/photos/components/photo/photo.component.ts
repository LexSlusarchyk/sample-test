import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';
import { PhotosService } from '../../services/photos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  photoId: string;
  photo: Photo;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private photoService: PhotosService) {

  }

  ngOnInit() {
    this.photoId = this.route.snapshot.paramMap.get('id');
    this.loadPhoto();
  }

  private loadPhoto() {
    this.photo = new Photo(this.photoService.getPhotoFromFavorites(this.photoId));
  }

  public removeFromFavorite() {
    this.photoService.removePhotoFromFavorites(this.photoId);
    this.router.navigate(['favorites']);
  }

}
