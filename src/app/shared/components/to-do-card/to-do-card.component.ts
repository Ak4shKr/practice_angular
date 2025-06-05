import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-card',
  standalone: true,
  template: `
    <div class="bg-white p-4 shadow rounded mb-4 border border-gray-200">
      <h2 class="text-xl font-bold">{{ todo.title }}</h2>
      <p class="text-gray-700 mb-2">{{ todo.description }}</p>
      <span class="text-sm text-white bg-blue-500 px-2 py-1 mt-2 rounded">
        Priority: {{ todo.priority }}
      </span>
      <div class="flex justify-between mt-4">
        <button
          (click)="handleEdit()"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          (click)="handleDelete()"
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  `,
})
export class ToDoCardComponent {
  @Input() todo: any;
  @Output() deleted = new EventEmitter<number>();
  @Output() edited = new EventEmitter<number>();

  constructor(private router: Router) {}

  handleDelete() {
    console.log('Deleting item with id card:', this.todo.id);
    this.deleted.emit(this.todo.id);
  }

  handleEdit() {
    this.router.navigate(['/edit', this.todo.id]);
  }
}
