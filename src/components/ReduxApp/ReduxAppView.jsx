import React from 'react';
import AddNewItemForm from '../AddNewItemForm/AddNewItemForm';
import ReduxTodoList from '../ReduxTodoList/ReduxTodoList';
import styles from './ReduxApp.module.css'
import {NavLink} from "react-router-dom";
import back from './back-navigational-arrow-button-pointing-to-left-svgrepo-com.svg';


const ReduxAppView = (props) => {

    return <header className={styles.container}>
        <NavLink to='/' className={styles.nav}>
            <img className={styles.back} src={back} alt=''/>
        </NavLink>

        <h1 className={styles.title}>MY GOALS</h1>
        <blockquote className={styles.motivation}>SET A GOAL AND DEFINE A TASK TO ACHIEVE IT</blockquote>
        <AddNewItemForm addItem={props.addTodolist} goal={'SET GOAL...max 60 symbols'} text={' goal'}/>

        <div className={styles.wrapper}>
        {props.todolists.map(tl => {
            return <ReduxTodoList key={tl.id} id={tl.id} title={tl.title}
                                  tasks = {props.tasks.filter(t => t.todoListId === tl.id)} />
        })}
        </div>
    </header>
};

export default ReduxAppView;