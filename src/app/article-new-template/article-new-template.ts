import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../services/article';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-new-template.html',
  styleUrl: './article-new-template.css',
})
export class ArticleNewTemplate {
  constructor(private articleService: ArticleService) {}

  submitted = false;

  article = new FormGroup({
    name: new FormControl('', Validators.required),

    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]+)?$')]),

    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern('https?:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}.*'),
    ]),

    isOnSale: new FormControl(false),
  });

  onSubmit() {
    if (this.article.valid) {
      this.articleService.addArticle({
        ...this.article.value,
      });

      console.log('ARTICLE CREAT:', this.article.value);

      this.submitted = true;

      this.article.reset();

      setTimeout(() => {
        this.submitted = false;
      }, 2000);
    }
  }
}
