import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HnArticle } from '../models/hnArticle.model';
import { LinkArticle } from '../models/linkArticle.model';
import 'rxjs';

@Injectable()
export class SendDataService {

  constructor(private http: Http) {
   }

   CreateNewHnArticle(hnArticle: HnArticle){
     var newHnArticle = {
          title: hnArticle.title,
          description: hnArticle.description,
          article: hnArticle.article,
          imageLink: hnArticle.imageLink,
          likes: hnArticle.likes
     }
     return newHnArticle;
   }

   saveHnArticle(hnArticle){
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     console.log(JSON.stringify(hnArticle));
     return this.http.post('http://localhost:3000/api/v1/hnarticle/save', JSON.stringify(hnArticle), {headers: headers})
     .map(res => res.json());
   }

   updatehnArticles(hnArticles: HnArticle[]){
     for(let hnArticle of hnArticles){
       this.http.put('http://localhost:3000/api/v1/hnarticle/' + hnArticle._id, hnArticle);
     };
   }

   updatehnArticle(hnArticle, articleid: string){
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.put('http://localhost:3000/api/v1/hnarticle/'+ articleid, JSON.stringify(hnArticle), {headers: headers}).map(
       res => res.json());
   }

   sendNewLinkArticle(linkArticle: LinkArticle){
    this.http.post('http://localhost:3000/api/v1/linkarticle/', linkArticle);
   }

   updateLinkArticles(linkArticles: LinkArticle[]){
     for(let linkArticle of linkArticles){
       this.http.put('http://localhost:3000/api/v1/linkarticle/' + linkArticle._id, linkArticle);
     };
   }


}
