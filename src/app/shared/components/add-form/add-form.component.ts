import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { todoStore } from '../../../store/todo.store';
import { ToDo } from '../../../utils/models/types';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './add-form.component.html',
})
export class AddFormComponent implements OnInit {
  todoForm: FormGroup;
  todoId: number | null = null;

  loadingButton: boolean = false;

  // title:string ="";

  todoStore = inject(todoStore);
  todos: ToDo[] = this.todoStore.todos();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', { validators: [Validators.required, Validators.minLength(10)] }],
      priority: ['medium', Validators.required],
    });
    this.todoForm.valueChanges.subscribe((value) => {
      console.log('Form value changed:', value);
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.todoId = Number(idParam);
      const item = this.todos.find((i) => i.id === this.todoId);
      if (item) {
        this.todoForm.patchValue(item);
      }
    }
    console.log('Current todos:', this.todoForm);
  }

  onSubmit() {
    if (this.todoForm.invalid) {
      this.todoForm.markAllAsTouched();
      return;
    }

    const formData = this.todoForm.value;

    if (this.todoId) {
      this.todoStore.updateTodo({ ...formData, id: this.todoId });
    } else {
      const newItem = {
        ...formData,
        id: this.todos.length + 1,
      };
      this.todoStore.addTodo(newItem);
    }
    this.router.navigate(['/']);
  }
}
