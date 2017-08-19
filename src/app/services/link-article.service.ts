import { LinkArticle } from '../models/linkArticle.model';
import { Subject } from 'rxjs/Subject';

export class LinkArticleService {
  linkArticlesChanged = new Subject<LinkArticle[]>();
   private linkArticles: LinkArticle[] = [

     new LinkArticle(
       'Sample article One',
       'This is just a test article for testing of the test',
       'http://thehackernews.com/2017/08/two-critical-zero-day-flaws-disclosed.html',
       0
     ),

     new LinkArticle(
       'Sample article two',
       'this is just the second article cause I do some array stuff',
       'http://thehackernews.com/2017/08/car-safety-hacking.html',
       0
     )
   ]

   setLinkArticles(linkArticles: LinkArticle[]){
     this.linkArticles = linkArticles;
     this.updateSubject();
   }

   getLinkArticles(){
     return this.linkArticles.slice() //remeber slice gives a copy
   }

   getLinkArticle(index: number){
     return this.linkArticles[index];
   }

   addLinkArticle(linkArticle: LinkArticle){
     this.linkArticles.push(linkArticle);
     this.updateSubject()
   }

   updateLinkArticles(index: number, newLinkArticle: LinkArticle){
     this.linkArticles[index] = newLinkArticle;
     this.updateSubject();
   }

   deleteLinkArticle(index: number){
     this.linkArticles.splice(index, 1);
     this.updateSubject();
   }

   updateSubject(){
     this.linkArticlesChanged.next(this.linkArticles.slice());
   }

   addLike(index:number){
     this.linkArticles[index].likes  += 1;
     this.updateSubject();
   }

   addDisLike(index:number){
       this.linkArticles[index].likes  += -1;
       let i = 0;
         if(this.linkArticles[index].likes < -10 ){
           this.deleteLinkArticle(index);
         }
       this.updateSubject();
   }

}
