import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { LinkArticleListComponent } from './article-list/link-article-list/link-article-list.component';
import { HnArticleListComponent } from './article-list/hn-article-list/hn-article-list.component';
import { HnArticleDetailComponent } from './article-list/hn-article-list/hn-article-detail/hn-article-detail.component';
import { TopArticleComponent } from './top-article/top-article.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/article-list', pathMatch: 'full'},
  { path: 'article-list', component: ArticleListComponent, children: [
    {path: 'top-article', component: TopArticleComponent, children: [
      {path:':id', component: HnArticleDetailComponent}
    ]},
    {path:'link-article-list', component: LinkArticleListComponent},
    {path:'hackernews-article-list', component: HnArticleListComponent, children: [
      {path:':id', component: HnArticleDetailComponent}
    ]}
  ] },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
