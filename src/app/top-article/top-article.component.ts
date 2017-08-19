import { Component, OnInit } from '@angular/core';
import { LinkArticleService } from '../services/link-article.service';
import { HnArticleService } from '../services/hn-article.service';
import { LinkArticle } from '../models/linkArticle.model';
import { HnArticle } from '../models/hnArticle.model';
import { HnArticleListItemComponent } from '../article-list/hn-article-list/hn-article-list-item/hn-article-list-item.component';
import { HnArticleDetailComponent } from '../article-list/hn-article-list/hn-article-detail/hn-article-detail.component';
import { LinkArticleItemComponent } from '../article-list/link-article-list/link-article-item/link-article-item.component';

@Component({
  selector: 'app-top-article',
  templateUrl: './top-article.component.html',
  styleUrls: ['./top-article.component.css']
})
export class TopArticleComponent implements OnInit {
  linkArticles : LinkArticle[];
  hnArticles : HnArticle[];
  hnMostLikedArticle: HnArticle;
  linkMostLikedArticle: LinkArticle;
  hnid: number;
  linkid: number;

  constructor(private hnArticleService: HnArticleService,
              private lArticleService: LinkArticleService) { }

  ngOnInit() {
    this.hnArticles = this.hnArticleService.gethnArticles();
    this.linkArticles = this.lArticleService.getLinkArticles();
    this.hnMostLikedArticle = this.hnArticles[0];
    this.linkMostLikedArticle = this.linkArticles[0];
    this.getMostLikedHnArticle();
    this.getMostLikedLinkArticle();
    }

    getMostLikedHnArticle(){
      let i:number = 0;
      while( i < this.hnArticles.length){
        if(this.hnArticles[i].likes > this.hnMostLikedArticle.likes){
          this.hnid = i;
          this.hnMostLikedArticle = this.hnArticles[i];
          console.log(this.hnMostLikedArticle);
        }
        i++;
      }
    }

    getMostLikedLinkArticle(){
      let i:number = 0;
      while( i < this.linkArticles.length){
        if(this.linkArticles[i].likes > this.linkMostLikedArticle.likes){
          this.linkid = i;
          this.linkMostLikedArticle = this.linkArticles[i];
        }
        i++;
      }
    }

}
