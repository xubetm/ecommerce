import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from '../article-item/article-item';
import { Article } from '../models/article';
import { ArticleQuantityChange } from '../models/article-quantity-change';

@Component({
  selector: 'app-article-list',
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
export class ArticleList {
  articles: Article[] = [
    {
      id: 1,
      name: 'Bruíxoles que busquen somriures perduts',
      imageUrl: 'https://www.onallibres.cat/cdnassets/books/9788401388491_1_l.jpg',
      price: 25,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 2,
      name: 'Victus',
      imageUrl: 'https://pictures.abebooks.com/isbn/9788418132469-es.jpg',
      price: 32,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 3,
      name: 'Jo, Robot',
      imageUrl:
        'https://grup62cat.cdnstatics2.com/usuaris/libros/thumbs/d39c37c3-7dcf-4f52-bded-2e8feb02d74f/d_1200_1200/jo-robot_9788499309255.webp',
      price: 30,
      isOnSale: false,
      quantityInCart: 0,
    },
  ];
  updateQuantity(event: ArticleQuantityChange) {
    const article = this.articles.find((a) => a.id === event.articleId);

    if (article) {
      article.quantityInCart = event.quantity;
    }
  }
}
