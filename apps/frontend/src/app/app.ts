import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface HelloResponse {
  message: string;
  timestamp: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly http = inject(HttpClient);

  protected readonly title = signal('CI/CD Practice');
  protected readonly message = signal('Loading...');

  constructor() {
    this.http.get<HelloResponse>('/api/hello').subscribe({
      next: (res) => this.message.set(res.message),
      error: () => this.message.set('Could not reach the backend.'),
    });
  }
}
