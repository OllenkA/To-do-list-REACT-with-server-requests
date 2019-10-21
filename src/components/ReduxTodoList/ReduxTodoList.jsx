import React from 'react';
import {connect} from 'react-redux';
import {addTaskTC, deleteTaskTC, deleteTodolistTC, changeTaskTC, getTasksTC, clearTasksTC} from '../../redux/reducer';
import ReduxTodoListView from "./ReduxTodoListView";

class ReduxTodoList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.newTasksTitleRef = React.createRef();
    // }

    componentDidMount() {
        this.restoreState();
    }

    state = {
        filterValue: 'All',
        // isFetching: true,
    };

    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem('our-state-' + this.props.id, stateAsString);
    // };

    restoreState = () => {
        this.props.getTasks(this.props.id);
    };

    addTask = (newText) => {
        this.props.addTask(this.props.id, newText)
    };

    deleteTodolist = (todolistId) => {
        this.props.deleteTodolist(todolistId);
    };

    deleteTask = (taskId) => {
        this.props.deleteTask(taskId)
    };

    onFilterChanged = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    };

    changeTask = (taskId, obj) => {
        let task = this.props.tasks.find((item) => {
            return item.id === taskId
        });

        let newTask = {...task, ...obj};
        this.props.updateTask(newTask)
    };

    onTaskStatusChanged = (taskId, status) => {
        this.changeTask(taskId, {status});
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    };

    componentWillUnmount() {
        this.props.clearTasks();
    }

    render = () => {
        return <ReduxTodoListView {...this.props}
                                  deleteTodolist={this.deleteTodolist}
                                  deleteTask={this.deleteTask}
                                  addTask={this.addTask}
                                  filterValue={this.state.filterValue}
                                  isFetching={this.state.isFetching}
                                  onTaskStatusChanged={this.onTaskStatusChanged}
                                  changeTitle={this.changeTitle}
                                  onFilterChanged={this.onFilterChanged}/>
    }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
    return {
        getTasks: (todolistId) => {
            dispatch(getTasksTC(todolistId))
        },
        addTask: (todolistId, newText) => {
            dispatch(addTaskTC(todolistId, newText));
        },
        deleteTask: (taskId) => {
            dispatch(deleteTaskTC(taskId));
        },
        deleteTodolist: (todolistId) => {
            dispatch(deleteTodolistTC(todolistId));
        },
        updateTask: (newTask) => {
            dispatch(changeTaskTC(newTask));
        },
        clearTasks: () => {
            dispatch(clearTasksTC());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTodoList);