import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HnArticle } from '../models/hnArticle.model';
import { HnArticleService} from '../services/hn-article.service';
import 'rxjs/Rx';

@Injectable()
export class DataTestService {

constructor(private http: Http, private hnArticleService: HnArticleService){

}

getHnArticles(){
  this.http.get('http://localhost:3000/api/v1/hnarticles').map(
    (response: Response) => {
      const articles: HnArticle[] = response.json();
      return articles;
    }
  ).subscribe(
    (articles: HnArticle[]) => {
      this.hnArticleService.sethnArticles(articles);
    }
  );
}

}
