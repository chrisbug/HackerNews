import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { HeaderComponent } from './header/header.component';
import { LinkArticleService } from './services/link-article.service';
import { LinkArticleListComponent } from './article-list/link-article-list/link-article-list.component';
import { HnArticleListComponent } from './article-list/hn-article-list/hn-article-list.component';
import { LinkArticleItemComponent } from './article-list/link-article-list/link-article-item/link-article-item.component';
import { HnArticleListItemComponent } from './article-list/hn-article-list/hn-article-list-item/hn-article-list-item.component';
import { HnArticleService } from './services/hn-article.service';
import { HnArticleDetailComponent } from './article-list/hn-article-list/hn-article-detail/hn-article-detail.component';
import { TopArticleComponent } from './top-article/top-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    HeaderComponent,
    LinkArticleListComponent,
    HnArticleListComponent,
    LinkArticleItemComponent,
    HnArticleListItemComponent,
    HnArticleDetailComponent,
    TopArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LinkArticleService, HnArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
