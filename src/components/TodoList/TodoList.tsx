import React, { useReducer, useEffect } from 'react';
import { useAppSelector } from '../../store';
import HideCompleted from '../HideCompleted/HideCompleted';
import TaskInput from '../TaskInput/TaskInput';
import TaskList from '../TaskList/TaskList';
import styles from './TodoList.module.css';

export default function TodoList() {
   const state = useAppSelector((state) => state);

   useEffect(() => {
      if (state.todos.todos?.length)
         localStorage.setItem('todos', JSON.stringify(state.todos.todos));
   }, [state.todos]);

   return (
      <div className={styles.main_wrapper}>
         <HideCompleted />
         <TaskInput />
         <TaskList />
      </div>
   );
}
