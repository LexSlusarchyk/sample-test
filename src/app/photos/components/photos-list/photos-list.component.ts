import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PhotosList } from '../../models/photosList';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  @Input() photosList: PhotosList;
  @Output() photoClicked = new EventEmitter<Photo>();

  constructor() { }

  ngOnInit() {
  }

  public onPhotoClicked(e) {
    this.photoClicked.emit(e);
  }

}
