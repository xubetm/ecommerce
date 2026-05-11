import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articlesSubject = new BehaviorSubject<any[]>([]);

  articles$ = this.articlesSubject.asObservable();

  getArticles() {
    return this.articlesSubject.value;
  }

  addArticle(article: any) {
    const current = this.articlesSubject.value;
    this.articlesSubject.next([...current, article]);
  }
}
