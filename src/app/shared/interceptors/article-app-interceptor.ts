import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserStoreService } from '../services/user-store';

@Injectable()
export class ArticleAppInterceptor implements HttpInterceptor {
  constructor(private userStore: UserStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.userStore.getToken();

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
