import { Component, inject, OnInit } from '@angular/core';
import { ToDoCardComponent } from '../../shared/components/to-do-card/to-do-card.component';
import { CommonModule } from '@angular/common';

interface ToDo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToDoCardComponent, CommonModule],
  template: `
    <h1 class="text-2xl font-bold mb-4">To-Do List</h1>

    @if (items.length === 0) {
    <div class="text-gray-500">No items found.</div>
    }@else { @for (item of items; track trackById($index, item)) {
    <app-to-do-card [todo]="item" (deleted)="onDelete($event)"></app-to-do-card>
    } }
  `,
})
export class HomeComponent implements OnInit {
  items: ToDo[] = [];

  ngOnInit(): void {
    this.loadItems();
    console.log('Loaded items:', this.items);
  }

  loadItems() {
    const data = localStorage.getItem('items');
    this.items = data ? JSON.parse(data) : [];
  }

  onDelete(id: number) {
    console.log('Deleting item with id:', id);
    this.items = this.items.filter((item) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  // onEdit(id: number) {
  //   console.log('Editing item with id:', id);
  //   const item = this.items.find((item) => item.id === id);
  //   if (item) {
  //     item.title = 'Edited Title';
  //     item.description = 'Edited Description';
  //     localStorage.setItem('items', JSON.stringify(this.items));
  //   }
  // }

  trackById(index: number, item: ToDo) {
    return item.id;
  }
}
