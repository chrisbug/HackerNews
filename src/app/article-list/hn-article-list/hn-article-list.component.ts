import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HnArticle } from '../../models/hnArticle.model';
import { HnArticleService } from '../../services/hn-article.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-hn-article-list',
  templateUrl: './hn-article-list.component.html',
  styleUrls: ['./hn-article-list.component.css']
})
export class HnArticleListComponent implements OnInit, OnDestroy {
  hnArticles: HnArticle[];
  subscription: Subscription;

  constructor(private hnArticleService: HnArticleService) { }

  ngOnInit() {
    this.subscription = this.hnArticleService.hnArticlesChanged.subscribe(
      (hnArticles: HnArticle[]) => {
        this.hnArticles = hnArticles;
      }
    );
    this.hnArticles = this.hnArticleService.gethnArticles();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe(); //Stops possible memory links from the observable
  }

}
