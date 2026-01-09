import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Tasks</h1>

    <ul>
      <li *ngFor="let task of tasks">
        {{ task.title }}
      </li>
    </ul>
  `
})
export class TasksPage {
  tasks: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:3001/tasks')
      .subscribe(data => this.tasks = data);
  }
}
