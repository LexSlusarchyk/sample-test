
export interface IPhoto {
  id: string;
  url: string;
}

export class Photo {
  id: string;
  url: string;

  constructor(options) {
    if (options.id) { this.id = options.id; }
    if (options.url) { this.url = options.url; }
  }

}
