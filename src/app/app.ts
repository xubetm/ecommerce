import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleItemComponent } from './article-item/article-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ecommerce');
}
