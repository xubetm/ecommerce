import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // USER
  {
    path: 'login',
    loadComponent: () => import('./user/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./user/register/register').then((m) => m.Register),
  },

  // ARTICLE
  {
    path: 'article/list',
    loadComponent: () => import('./article/list/article-list').then((m) => m.ArticleList),
  },

  {
    path: 'article/create',
    loadComponent: () =>
      import('./article/create/article-new-reactive').then((m) => m.ArticleNewReactiveComponent),
    canActivate: [authGuard],
  },

  {
    path: 'article/:id',
    loadComponent: () =>
      import('./article/detail/article-detail').then((m) => m.ArticleDetailComponent),
  },
];
