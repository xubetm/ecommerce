import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast" *ngIf="message$ | async as message">
      {{ message }}
    </div>
  `,
  styleUrl: './notification.css',
})
export class NotificationComponent {
  message$!: Observable<string | null>;

  constructor(private notificationService: NotificationService) {
    this.message$ = this.notificationService.message$;
  }
}
