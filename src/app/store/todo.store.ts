import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { ToDo } from '../utils/models/types';
import { computed, effect } from '@angular/core';

export interface Todos {
  todos: ToDo[];
}

export const initialTodos: Todos = {
  todos: [],
};

export const todoStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialTodos), 
  withComputed(({ todos }) => ({
    todoCount: computed(()=> todos().length),
  })),
  withMethods(({ todos, ...store }) => ({
    addTodo: (todo: ToDo) => {
      const updatedTodos = [...todos(), todo];
      patchState(store, { todos: updatedTodos });
    },
    removeTodo: (todoId: number) => {
      const updatedTodos = todos().filter((t: ToDo) => t.id !== todoId);
      patchState(store, { todos: updatedTodos });
    },
    updateTodo: (updatedTodo: ToDo) => {
      const updatedTodos = todos().map((t: ToDo) =>
        t.id === updatedTodo.id ? updatedTodo : t
      );
   patchState(store, { todos: updatedTodos });
    },
  })),
  withHooks({
    onInit(store){
        const initialTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        if (initialTodos) {
            patchState(store, { todos: initialTodos });
        }
        effect(() => {
            const state = getState(store);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        });
    }
  })
);
