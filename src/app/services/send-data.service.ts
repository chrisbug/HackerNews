import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HnArticle } from '../models/hnArticle.model';
import { LinkArticle } from '../models/linkArticle.model';

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
          likes: hnArticle.likes,
          isCompleeted: false
     }
     return newHnArticle;
   }

   sendNewHnArticle(hnArticle: HnArticle){
     var newhnArticle = this.CreateNewHnArticle(hnArticle);
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/api/v1/hnarticle/', JSON.stringify(newhnArticle), {headers: headers})
   }

   updatehnArticles(hnArticles: HnArticle[]){
     for(let hnArticle of hnArticles){
       this.http.put('http://localhost:3000/api/v1/hnarticle/' + hnArticle._id, hnArticle);
     };
   }

   updatehnArticle(hnArticle: HnArticle){
     this.http.put('http://localhost:3000/api/v1/hnarticle/' + hnArticle._id, JSON.stringify(hnArticle));
     console.log(JSON.stringify(hnArticle));
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
