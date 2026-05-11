import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NameArticleValidator } from './validators/name-article.validator';
import { ArticleService } from '../services/article';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-new-reactive.html',
  styleUrl: './article-new-reactive.css',
})
export class ArticleNewReactiveComponent {
  submitted = false;

  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
  ) {
    this.articleForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          NameArticleValidator.forbiddenNames(['Prova', 'Test', 'Mock', 'Fake']),
        ],
      ],

      price: ['', [Validators.required, Validators.min(0.1)]],

      imageUrl: [
        '',
        [Validators.required, Validators.pattern('https?:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}.*')],
      ],

      isOnSale: [false],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.articleForm.valid) {
      this.articleService.addArticle(this.articleForm.value);
      console.log('ARTICLE GUARDAT:', this.articleForm.value);

      console.log('ARTICLE:', this.articleForm.value);
      this.articleForm.reset();
      this.submitted = false;
    }
  }
}
