export class LinkArticle {
  public title: string;
  public description: string;
  public link: string;
  public likes: number;

  constructor(title: string, description: string, link:string, likes:number){
    this.title = title;
    this.description = description;
    this.link = link;
    this.likes = likes;
  }

}
