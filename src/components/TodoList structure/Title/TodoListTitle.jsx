import React from 'react';
import styles from './TodoListTitle.module.css';
import deleteImg from './delete-button.svg';

const TodoListTitle = (props) => {

    let onDeleteItemClick = () => {
        props.deleteTodolist(props.id);
    };

    return <header>
        <img className={styles.del} src={deleteImg} alt='' onClick={onDeleteItemClick}/>
        <h3 className={styles.titleGoal}>{props.title}</h3>
    </header>
};

export default TodoListTitle;        