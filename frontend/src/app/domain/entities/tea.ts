export class Tea {
  id?: number;
  title: string;
  description: string;
  type: string;
  imgUrl?: string;

  constructor(
    title: string,
    description: string,
    type: string,
    imgUrl?: string,
  ) {
    this.title = title;
    this.description = description;
    this.type = type;
    this.imgUrl = imgUrl;
  }
}
