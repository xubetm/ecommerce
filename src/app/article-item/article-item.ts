import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-item',
  imports: [CommonModule],
  templateUrl: './article-item.html',
  styleUrl: './article-item.css',
})
export class ArticleItemComponent {
  article: Article = {
    name: 'Bruíxoles que busquen somriures perduts',
    imageUrl: 'https://www.onallibres.cat/cdnassets/books/9788401388491_1_l.jpg',
    price: 25,
    isOnSale: true,
    quantityInCart: 0,
  };

  increase() {
    this.article.quantityInCart++;
  }

  decrease() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
