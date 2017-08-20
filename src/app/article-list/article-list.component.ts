import { Component, OnInit } from '@angular/core';
import { HnArticleService } from '../services/hn-article.service';
import { LinkArticleService } from '../services/link-article.service';
import { Subscription } from 'rxjs/Subscription';
import { HnArticle } from '../models/hnArticle.model';
import { LinkArticle } from '../models/linkArticle.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  randomHnArticle: HnArticle;
  randomLinkArticle: LinkArticle;
  hnArticles: HnArticle[];
  linkArticles: LinkArticle[];
  whichArticleToUse: number;

  constructor(private hnArticleService: HnArticleService,
              private lArticleService: LinkArticleService) {
   }

  ngOnInit() {
    this.whichArticleToUse = Math.floor((Math.random()* 1) + 0);
  }

  getRandomArticle(){
    //if hn is to be used and link

    if((Math.floor((Math.random()* 1) + 0))=== 1){
      this.randomHnArticle = this.hnArticleService.getHnArticle((Math.floor((Math.random()*  this.hnArticleService.gethnArticles().length) + 0)))
    } else {
      this.randomLinkArticle = this.lArticleService.getLinkArticle((Math.floor((Math.random()*  this.lArticleService.getLinkArticles().length) + 0)))
    }

    }

}
