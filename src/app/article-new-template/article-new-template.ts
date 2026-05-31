import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../shared/services/article.service';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-new-template.html',
  styleUrl: './article-new-template.css',
})
export class ArticleNewTemplate {
  submitted = false;

  article = new FormGroup({
    name: new FormControl('', Validators.required),

    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]+)?$')]),

    imageUrl: new FormControl('', Validators.required),

    isOnSale: new FormControl(false),
  });

  constructor(private articleService: ArticleService) {}

  onSubmit() {
    if (this.article.valid) {
      this.articleService.create(this.article.value as any).subscribe(() => {
        this.article.reset();
        this.submitted = true;
      });
    }
  }
}
