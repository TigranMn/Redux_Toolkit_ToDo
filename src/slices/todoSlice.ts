import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const todos = JSON.parse(localStorage.getItem('todos')!) || [];

const hide: boolean =
   JSON.parse(localStorage.getItem('hideCompleted')!) || false;

export type TTodo = {
   description: string;
   id: number;
   completed: boolean;
   hidden: boolean;
};

export type TTodosState = {
   todos: TTodo[];
   hideCompleted: boolean;
};

const initialState: TTodosState = { hideCompleted: hide, todos: todos };

const todosSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      addTodo(state, action: PayloadAction<TTodo>) {
         console.log(state.todos);
         state.todos.unshift(action.payload);
      },
      removeTodo(state, action: PayloadAction<number>) {
         state.todos = state.todos.filter((el) => el.id !== action.payload);
      },
      hideCompleted(state, action: PayloadAction<boolean>) {
         state.todos.map((el) => {
            if (el.completed) {
               el.hidden = action.payload;
               return el;
            }
            return el;
         });
      },
      toggleComplete(state, action: PayloadAction<number>) {
         state.todos = state.todos.map((el) => {
            if (el.id === action.payload) {
               el.completed = !el.completed;
               if (state.hideCompleted) {
                  el.hidden = true;
               }
               return el;
            }
            return el;
         });
      },
      toggleHide(state) {
         state.hideCompleted = !state.hideCompleted;
      },
   },
});

export const {
   toggleComplete,
   addTodo,
   removeTodo,
   toggleHide,
   hideCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
