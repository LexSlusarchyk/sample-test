import {IPhoto, Photo} from './photo';
import * as _ from 'underscore';


export class PhotosList {
  data: Photo[] = [];
  loading: boolean;

  constructor() {
  }

  public init(options: IPhoto[]) {
    _.each(options, (item: IPhoto) => this.addPhoto(new Photo(item)));
  }

  public addPhoto(photo: IPhoto) {
    this.data.push(photo);
  }

  public setLoading(value: boolean) {
    this.loading = value;
  }

}
