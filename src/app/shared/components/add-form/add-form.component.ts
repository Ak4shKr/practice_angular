import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-form.component.html',
})
export class AddFormComponent implements OnInit {
  todoForm: FormGroup;
  todoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['medium', Validators.required],
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.todoId = +idParam;
      const item = this.items.find((i) => i.id === this.todoId);
      if (item) {
        this.todoForm.patchValue(item);
      }
    }
  }

  get items(): any[] {
    const stored = localStorage.getItem('items');
    return stored ? JSON.parse(stored) : [];
  }

  set items(newItems: any[]) {
    localStorage.setItem('items', JSON.stringify(newItems));
  }

  onSubmit() {
    if (this.todoForm.invalid) {
      this.todoForm.markAllAsTouched();
      return;
    }

    const formData = this.todoForm.value;

    if (this.todoId) {
      // Edit flow
      const updatedItems = this.items.map((item) =>
        item.id === this.todoId ? { ...item, ...formData } : item
      );
      this.items = updatedItems;
    } else {
      // Add flow
      const newItem = {
        ...formData,
        id: this.items.length + 1,
      };
      this.items = [...this.items, newItem];
    }

    this.router.navigate(['/']); // go back to home after save
  }
}
