import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './shared/components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { UserStoreService } from './shared/services/user-store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private userStore: UserStoreService) {}

  ngOnInit() {
    console.log('TOKEN:', this.userStore.getToken());
  }
}
