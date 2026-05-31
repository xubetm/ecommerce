import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../core/models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  getArticles(search: string = ''): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}?q=${search}`);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  create(article: Article): Observable<any> {
    return this.http.post(this.apiUrl, article);
  }

  changeQuantity(articleId: number, changeInQuantity: number): Observable<Article> {
    return this.http.patch<Article>(`${this.apiUrl}/${articleId}`, { changeInQuantity });
  }
}
