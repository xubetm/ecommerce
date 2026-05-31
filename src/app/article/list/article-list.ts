import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Article } from '../../core/models/article';
import { ArticleService } from '../../shared/services/article.service';
import { ArticleItemComponent } from '../../shared/components/article-item/article-item';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent],
  templateUrl: './article-list.html',
  styleUrl: './article-list.css',
})
export class ArticleList implements OnInit {
  articles$!: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.articles$ = this.articleService.getArticles(value);
  }
}
