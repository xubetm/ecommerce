import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { ArticleList } from './article-list/article-list';
import { ArticleNewTemplate } from './article-new-template/article-new-template';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Navbar, ArticleList, ArticleNewTemplate, ArticleNewReactiveComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  view: 'list' | 'template' | 'reactive' = 'list';

  showList() {
    this.view = 'list';
  }

  showTemplate() {
    this.view = 'template';
  }

  showReactive() {
    this.view = 'reactive';
  }
}
