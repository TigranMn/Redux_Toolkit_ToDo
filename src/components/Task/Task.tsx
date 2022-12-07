import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import PopUp from '../PopUp/PopUp';
import styles from './Task.module.css';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import { toggleComplete, TTodo } from '../../slices/todoSlice';
import { useAppDispatch } from '../../store';

type TTaskProps = {
   todo: TTodo;
};

export default function Task(props: TTaskProps) {
   const [modalActive, setModalActive] = useState<boolean>(false);
   const dispatch = useAppDispatch();
   const { todo } = props;

   return (
      <>
         <li className={styles.task_list_item}>
            <Checkbox
               checked={todo.completed}
               onClick={() => {
                  dispatch(toggleComplete(todo.id));
               }}
            />
            <span style={{ color: !todo.completed ? '#666666' : '#ACACAC' }}>
               {todo.description}
            </span>
            <DeleteBtn
               onClick={() => {
                  setModalActive(true);
               }}
            />
         </li>
         {modalActive ? (
            <PopUp
               todo={todo}
               setModal={setModalActive}
            />
         ) : null}
      </>
   );
}
