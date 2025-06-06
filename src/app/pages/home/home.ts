import { Component, inject, OnInit } from '@angular/core';
import { ToDoCardComponent } from '../../shared/components/to-do-card/to-do-card.component';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../utils/models/types';
import { todoStore } from '../../store/todo.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToDoCardComponent, CommonModule],
  template: `
    <h1 class="text-2xl font-bold mb-4">To-Do List</h1>

    @if (todoStore.todos().length === 0) {
    <div class="text-gray-500">No items found.</div>
    }@else { @for (item of todoStore.todos(); track trackById($index, item)) {
    <app-to-do-card [todo]="item" (deleted)="onDelete($event)"></app-to-do-card>
    } }
  `,

})
export class HomeComponent implements OnInit {
  todoStore = inject(todoStore);
  items: ToDo[] = [];

  ngOnInit(): void {
    this.loadItems();
    console.log('Loaded items:', this.items);
  }

  loadItems() {
    this.items = this.todoStore.todos();
    console.log('Items loaded from store & count:', this.items, this.todoStore.todoCount());
  }

  onDelete(id: number) {
    console.log('Deleting item with id:', id);
    this.items = this.items.filter((item) => item.id !== id);
    this.todoStore.removeTodo(id);
  }

  trackById(index: number, item: ToDo) {
    return item.id;
  }
}
