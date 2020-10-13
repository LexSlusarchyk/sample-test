import { Injectable } from '@angular/core';
import { PhotosList } from '../models/photosList';
import * as faker from 'faker';
import * as _ from 'underscore';
import { IPhoto, Photo } from '../models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  preloadQuantity = 12;
  photosList = new PhotosList();

  constructor() {
    this.loadPhotos();
  }

  public loadPhotos() {
    this.photosList.setLoading(true);
    this.getMockList().subscribe(
      (res: IPhoto[]) => this.onPhotoLoadSuccess(res),
      err => this.onPhotoLoadError(err));
  }

  private onPhotoLoadSuccess(res) {
    this.photosList.setLoading(false);
    this.photosList.init(res);
  }

  private onPhotoLoadError(err) {
    this.photosList.setLoading(false);
  }

  private getMockList() {
    return new Observable<IPhoto[]>((observer) => {
      const list = [];
      for (let i = 0; i < this.preloadQuantity; i++) {
        this.getRandomImageUrl().subscribe( (imgUrl: string) => {
          const photoOptions = {
            id: faker.random.uuid(),
            url: imgUrl
          };
          list.push(photoOptions);

          const isLast = list.length === this.preloadQuantity;
          if (isLast) {
            observer.next(list);
            observer.complete();
          }
        });
      }
    });
  }

  private getRandomImageUrl() {
    return new Observable<string>((observer) => {
      const img = new Image();
      img.onload = () => {
        observer.next(img.src);
        observer.complete();
      } ;
      img.onerror = () => {
        observer.next(this.generateUrl());
        observer.complete();
      };
      img.src = this.generateUrl();
    });
  }

  private generateUrl() {
    return `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/640/480`;
  }

  public addPhotoToFavorites(photo: Photo) {
    const favorites = this.getFavoritesList();
    favorites.push(photo);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  public removePhotoFromFavorites(id: string) {
    const favorites = this.getFavoritesList();
    const filteredList = _.filter(favorites, (item: IPhoto) => item.id !== id);
    localStorage.setItem('favorites', JSON.stringify(filteredList));
  }

  public getFavoritesList(): IPhoto[] {
    const favorites = localStorage.getItem('favorites');
    if (!favorites) { return []; }
    return JSON.parse(favorites);
  }

  public getPhotoFromFavorites(id: string): IPhoto {
    const favorites = this.getFavoritesList();
    return _.find(favorites, item => item.id === id);
  }
}
