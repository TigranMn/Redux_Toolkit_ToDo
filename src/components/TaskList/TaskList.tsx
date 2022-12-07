import React from 'react';
import { useAppSelector } from '../../store';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

export default function TaskList() {
   const state = useAppSelector((state) => state.todos);

   return !state?.todos.length ? (
      <div className={styles.empty_zone_section}>
         <p>Your life is a blank page. You write on it.</p>
         <h3>So start by adding your tasks here.</h3>
      </div>
   ) : (
      <div className={styles.tasks_list_section}>
         <ul className={styles.tasks_list}>
            {state.todos.map((el) => {
               return !el.completed || !state.hideCompleted ? (
                  <Task
                     key={el.id}
                     todo={el}
                  />
               ) : null;
            })}
         </ul>
      </div>
   );
}
