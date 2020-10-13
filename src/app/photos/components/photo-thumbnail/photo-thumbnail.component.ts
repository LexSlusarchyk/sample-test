import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.scss']
})
export class PhotoThumbnailComponent implements OnInit {
  @Input() photo: Photo;
  @Input() showLarge?: boolean;
  @Output() photoClicked = new EventEmitter<Photo>();

  constructor() { }

  ngOnInit() {
  }

  onPhotoClicked(e) {
    this.photoClicked.emit(this.photo);
  }

}
