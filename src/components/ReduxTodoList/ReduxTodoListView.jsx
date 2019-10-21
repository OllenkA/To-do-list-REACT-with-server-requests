import React from 'react';
import TodoListTitle from '../TodoList structure/Title/TodoListTitle';
import AddNewItemForm from '../AddNewItemForm/AddNewItemForm';
import TodoListTasks from '../TodoList structure/Tasks/TodoListTasks';
import TodoListFooter from '../TodoList structure/Footer/TodoListFooter';
// import preloader from '../../preloader.svg';
import styles from './ReduxTodoList.module.css'

const ReduxTodoListView = (props) => {
    return <div className={styles.todoList}>
        <div className={styles.nameGoal}>
            <TodoListTitle title={props.title}
                           {...props}
                           deleteTodolist={props.deleteTodolist}/>
            <AddNewItemForm {...props} goal={'Set tasks for your goal..!'}
                            text={' task'}
                            addItem={props.addTask}/>
        </div>
        <TodoListTasks onTaskStatusChanged={props.onTaskStatusChanged}
                       changeTitle={props.changeTitle}
                       deleteTask={props.deleteTask}
                       tasks={props.tasks.filter(t => {
                               if (props.filterValue === 'All') {
                                   return true;
                               }
                               if (props.filterValue === 'Active') {
                                   return t.status === 0
                               }
                               if (props.filterValue === 'Completed') {
                                   return t.status === 2
                               }
                               return null
                           }
                       )
                       }
        />
        {/*<img src={preloader} alt=''/>*/}


        <TodoListFooter onFilterChanged={props.onFilterChanged} filterValue={props.filterValue}/>
    </div>
};


export default ReduxTodoListView;