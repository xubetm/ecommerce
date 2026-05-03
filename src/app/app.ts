import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleList } from './article-list/article-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ecommerce');
}
