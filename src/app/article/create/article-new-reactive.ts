import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../shared/services/article.service';

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
      name: ['', Validators.required],

      price: ['', [Validators.required, Validators.min(0.1)]],

      imageUrl: ['', [Validators.required]],

      isOnSale: [false],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.articleForm.valid) {
      this.articleService.create(this.articleForm.value).subscribe(() => {
        console.log('ARTICLE CREATED');
        this.articleForm.reset();
        this.submitted = false;
      });
    }
  }
}
