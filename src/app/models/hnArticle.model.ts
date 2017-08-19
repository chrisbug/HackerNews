export class HnArticle {
  public title: string;
  public description: string;
  public article: string;
  public imageLink: string;
  public likes: number;

  constructor(title: string, description: string,
              article: string, imageLink: string, likes:number){
    this.title = title;
    this.description = description;
    this.article = article;
    this.imageLink = imageLink;
    this.likes = likes;
  }
}
