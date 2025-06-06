import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { ToDo } from '../utils/models/types';

export interface Todos {
  todos: ToDo[];
}

export const initialTodos: Todos = {
  todos: loadFromStorage() || [],
};

function loadFromStorage(): ToDo[] {
  return JSON.parse(localStorage.getItem('todos') || '[]');
}

function saveToStorage(todos: ToDo[]) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export const todoStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialTodos), 
  withMethods(({ todos, ...store }) => ({
    addTodo: (todo: ToDo) => {
      const updatedTodos = [...todos(), todo];
      patchState(store, { todos: updatedTodos });
      saveToStorage(updatedTodos);
    },
    removeTodo: (todoId: number) => {
      const updatedTodos = todos().filter((t: ToDo) => t.id !== todoId);
      patchState(store, { todos: updatedTodos });
        saveToStorage(updatedTodos);
    },
    updateTodo: (updatedTodo: ToDo) => {
      const updatedTodos = todos().map((t: ToDo) =>
        t.id === updatedTodo.id ? updatedTodo : t
      );
      patchState(store, { todos: updatedTodos });
        saveToStorage(updatedTodos);
    },
  }))
);
