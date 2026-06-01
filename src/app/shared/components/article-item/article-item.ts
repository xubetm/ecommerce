import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../../core/models/article';
import { ArticleQuantityChange } from '../../../core/models/article-quantity-change';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-item',
  imports: [CommonModule, DefaultImagePipe, RouterModule],
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
      quantity: 1,
    });
  }

  decrease() {
    if (this.article.quantityInCart > 0) {
      this.quantityChange.emit({
        articleId: this.article.id,
        quantity: -1,
      });
    }
  }
}
