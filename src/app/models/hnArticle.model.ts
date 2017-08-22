export class HnArticle {
  public id: string;
  public title: string;
  public description: string;
  public article: string;
  public imageLink: string;
  public likes: number;

  constructor(id: string ,title: string, description: string,
              article: string, imageLink: string, likes:number){
    this.id = id;
    this.title = title;
    this.description = description;
    this.article = article;
    this.imageLink = imageLink;
    this.likes = likes;
  }
}
