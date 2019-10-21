import React from 'react';
import styles from "./TodoListTask.module.css";
import deleteImg from '../Title/delete-button.svg';


class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        let check = e.currentTarget.checked ? 2 : 0;
        this.props.onTaskStatusChanged(this.props.task.id, check);
    };

    onTitleChanged = (e) => {
        this.setState({newTitle: e.currentTarget.value})
    };

    state = {
        editMode: false,
        newTitle: this.props.task.title,
    };

    priority = ['Low', 'Middle', 'High', 'Urgently', 'Later'];

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.props.changeTitle(this.props.task.id, this.state.newTitle);
        this.setState({
            editMode: false
        })
    };

    onDeleteItemClick = () => {
        this.props.deleteTask(this.props.task.id);
    };

    render = () => {

        return (
            <div className={(this.props.task.status === 2) ? styles.activeTask: styles.task}>
                <input className={styles.check}
                       type="checkbox" checked={this.props.task.status === 2}
                       onChange={this.onIsDoneChanged}/>
                <div className={styles.text}>
                    {this.state.editMode
                        ? <input onBlur={this.deactivateEditMode}
                                 autoFocus={true} value={this.state.newTitle}
                                 onChange={this.onTitleChanged}/>
                        : <span className={styles.taskTitle} onClick={this.activateEditMode}><b>{
                            this.props.task.title}</b>
                    </span>}
                    <i className={styles.priority}>Priority:{this.priority[this.props.task.priority]}</i>
                </div>
                <img src={deleteImg} alt='' onClick={this.onDeleteItemClick} className={styles.delImg}/>
            </div>
        );
    }
}

export default TodoListTask;