import React, { useState, useEffect } from 'react';
import { toggleHide } from '../../slices/todoSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import Checkbox from '../Checkbox/Checkbox';
import styles from './HideCompleted.module.css';

export default function HideCompleted() {
   const dispatch = useAppDispatch();
   const hidden = useAppSelector((state) => state.todos.hideCompleted);

   useEffect(() => {
      localStorage.setItem('hideCompleted', JSON.stringify(hidden));
   }, [hidden]);

   const handleCheck = () => {
      dispatch(toggleHide());
   };

   return (
      <div className={styles.hide_check}>
         <Checkbox
            checked={hidden}
            onClick={handleCheck}
         />
         <span>Hide completed</span>
      </div>
   );
}
