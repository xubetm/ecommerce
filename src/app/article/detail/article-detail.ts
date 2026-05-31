import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../shared/services/article.service';
import { Article } from '../../core/models/article';
import { DefaultImagePipe } from '../../shared/pipes/default-image.pipe';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.css',
})
export class ArticleDetailComponent implements OnInit {
  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.articleService.getArticleById(id).subscribe((data) => {
      this.article = data;
    });
  }
}
