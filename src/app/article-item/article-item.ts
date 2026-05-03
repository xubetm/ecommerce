import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../models/article';
import { ArticleQuantityChange } from '../models/article-quantity-change';

@Component({
  selector: 'app-article-item',
  imports: [CommonModule],
  templateUrl: './article-item.html',
  styleUrl: './article-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();

  increase() {
    this.quantityChange.emit({
      articleId: this.article.id,
      quantity: this.article.quantityInCart + 1,
    });
  }

  decrease() {
    if (this.article.quantityInCart > 0) {
      this.quantityChange.emit({
        articleId: this.article.id,
        quantity: this.article.quantityInCart - 1,
      });
    }
  }
}
