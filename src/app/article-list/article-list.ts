import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from '../article-item/article-item';
import { Article } from '../models/article';
import { ArticleQuantityChange } from '../models/article-quantity-change';
import { ArticleService } from '../services/article';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent],
  templateUrl: './article-list.html',
  styles: [
    `
      .list-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
      }
    `,
  ],
})
export class ArticleList implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  updateQuantity(event: ArticleQuantityChange) {
    const article = this.articles.find((a) => a.id === event.articleId);

    if (article) {
      article.quantityInCart = event.quantity;
    }
  }
}
