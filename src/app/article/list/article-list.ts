import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';

import { Article } from '../../core/models/article';
import { ArticleService } from '../../shared/services/article.service';
import { ArticleItemComponent } from '../../shared/components/article-item/article-item';
import { ArticleQuantityChange } from '../../core/models/article-quantity-change';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent],
  templateUrl: './article-list.html',
  styleUrl: './article-list.css',
})
export class ArticleList implements OnInit {
  articles$!: Observable<Article[]>;

  private refresh$ = new BehaviorSubject<void>(undefined);

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles$ = this.refresh$.pipe(switchMap(() => this.articleService.getArticles()));
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.articles$ = this.articleService.getArticles(value);
  }

  changeQuantity(event: ArticleQuantityChange) {
    this.articleService.changeQuantity(event.articleId, event.quantity).subscribe(() => {
      this.refresh$.next();
    });
  }
}
