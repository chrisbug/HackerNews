import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LinkArticle } from '../../models/linkArticle.model';
import { LinkArticleService } from '../../services/link-article.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-link-article-list',
  templateUrl: './link-article-list.component.html',
  styleUrls: ['./link-article-list.component.css']
})
export class LinkArticleListComponent implements OnInit, OnDestroy {
  articles: LinkArticle[];
  subscription: Subscription;

  constructor(private linkArticleService: LinkArticleService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.linkArticleService.linkArticlesChanged.subscribe(
      (linkArticles: LinkArticle[]) => {
        this.articles = linkArticles;
      }
    );
    this.articles = this.linkArticleService.getLinkArticles();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe(); //Stops possible memory links from the observable
  }

}
