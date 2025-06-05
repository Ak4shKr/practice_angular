import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-to-do-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="bg-white p-4 shadow rounded mb-4 border border-gray-200">
      <h2 class="text-xl font-bold">{{ todo.title }}</h2>
      <p class="text-gray-700 mb-2">{{ todo.description }}</p>
      <span
        class="text-sm text-white px-2 py-1 mt-2 rounded"
        [ngClass]="styleMap[todo.priority]"
      >
        Priority: {{ todo.priority }}
      </span>
      <div class="flex justify-end mt-4 gap-x-4">
        <button
          (click)="handleEdit()"
          class="font-semibold text-black px-4 py-1 rounded hover:bg-gray-200"
        >
          Edit
        </button>
        <button
          (click)="handleDelete()"
          class="bg-red-500 text-white px-4 py-1 rounded  hover:bg-red-600"
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

  public styleMap: { [key: string]: string } = {
    high: 'bg-blue-700',
    medium: 'bg-blue-600',
    low: 'bg-blue-500',
  };

  constructor(private router: Router) {}

  handleDelete() {
    console.log('Deleting item with id card:', this.todo.id);
    this.deleted.emit(this.todo.id);
  }

  handleEdit() {
    this.router.navigate(['/edit', this.todo.id]);
  }
}
