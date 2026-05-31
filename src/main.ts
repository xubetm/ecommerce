import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticleAppInterceptor } from './app/shared/interceptors/article-app-interceptor';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ArticleAppInterceptor,
      multi: true,
    },
  ],
});
