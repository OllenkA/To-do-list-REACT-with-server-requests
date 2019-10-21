import React from 'react';
import styles from './TodoListTasks.module.css';
import TodoListTask from '../Task/TodoListTask';

const TodoListTasks = (props) => {

    let tasksElements = props.tasks.map(task =>
        <TodoListTask key={task.id} task={task}
                      onTaskStatusChanged={props.onTaskStatusChanged}
                      changeTitle={props.changeTitle}
                      deleteTask={props.deleteTask}
        />);

    return <div className={styles.allTasks}>
        {tasksElements}
    </div>
};

export default TodoListTasks;

