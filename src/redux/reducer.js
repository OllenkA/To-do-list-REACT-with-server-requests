import {todolistAPI} from "../api";

export const ADD_TODOLIST = 'ADD-TODOLIST';
export const SET_TODOLISTS = 'SET-TODOLISTS';
export const SET_TASKS = 'SET-TASKS';
export const UPDATE_TASK = 'UPDATE-TASK';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TODOLIST = 'DELETE-TODOLIST';
export const DELETE_TASK = 'DELETE-TASK';
export const CLEAR_TASK = 'CLEAR-TASK'

const initialState = {
    tasks: [],
    todolists: [],
    isTaskClear: false
};

export const getTasksTC = (todolistId) => (dispatch) => {
    todolistAPI.getTasks(todolistId)
        .then((res) => {
            dispatch(setTasksAC(res.data.items));
        });
};

export const getTodolistsTC = () => (dispatch) => {
    todolistAPI.getTodolists()
        .then(res => {
            dispatch(setTodolistsAC(res.data))
        });
};

export const addTodolistTC = (title) => (dispatch) => {
    todolistAPI.addTodolist(title)
        .then(res => {
            dispatch(addTodolistAC(res.data.data.item))
        });
};

export const addTaskTC = (todolistId, newText) => (dispatch) => {
    todolistAPI.addTask(todolistId, newText)
        .then(res => {
            dispatch(addTaskAC(res.data.data.item))
        });
};

export const deleteTaskTC = (taskId) => (dispatch) => {
    todolistAPI.deleteTask(taskId)
        .then(res => {
            dispatch(deleteTaskAC(taskId))
        })

};

export const deleteTodolistTC = (todolistId) => (dispatch, getState) => {
    todolistAPI.deleteTodolist(todolistId)
        .then(res => {
            dispatch(deleteTodolistAC(todolistId))
        })

};

export const changeTaskTC = (newTask) => (dispatch, getState) => {
    todolistAPI.updateTask(newTask)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(updateTaskAC(newTask))
            }
        })

};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODOLIST:
            let newTodolists = [action.todolist, ...state.todolists];
            return {
                ...state,
                todolists: newTodolists
            };
        case SET_TODOLISTS:
            return {
                ...state,
                todolists: action.todolists
            };
        case SET_TASKS:
            debugger
            if(state.isTaskClear) {
                return {
                    ...state,
                    tasks: action.tasks,
                    isTaskClear: false
                };
            } else  {
                return {
                    ...state,
                    tasks: [...action.tasks, ...state.tasks]
                };
            }

        case UPDATE_TASK:
            let newTasks = state.tasks.map(el => {
                if (el.id === action.task.id) {
                    return action.task
                } else {
                    return el
                }
            });
            return {
                ...state,
                tasks: newTasks
            };
        case ADD_TASK:
            let newTasksArray = [
                action.task,
                ...state.tasks];
            return {
                ...state,
                tasks: newTasksArray
            };
        case DELETE_TASK:
            let newArrayTasks = state.tasks.filter(el => {
                return el.id !== action.taskId
            });
            return {
                ...state,
                tasks: newArrayTasks
            };
        case DELETE_TODOLIST:
            let newTodolistsArray = state.todolists.filter(el => {
                return el.id !== action.todolistId
            });
            return {
                ...state,
                todolists: newTodolistsArray
            };

        case CLEAR_TASK:
            return {
                ...state,
                isTaskClear: true
            };

        default:
            return state;
    }

};

export const addTaskAC = (task) => ({type: ADD_TASK, task});

export const addTodolistAC = (todolist) => ({type: ADD_TODOLIST, todolist});

export const deleteTaskAC = (taskId) => ({type: DELETE_TASK, taskId});

export const deleteTodolistAC = (todolistId) => ({type: DELETE_TODOLIST, todolistId});

export const setTodolistsAC = (todolists) => ({type: SET_TODOLISTS, todolists: todolists});

export const setTasksAC = (tasks) => ({type: SET_TASKS, tasks: tasks});

export const updateTaskAC = (task) => ({type: UPDATE_TASK, task: task});

export const clearTasksTC = () => ({type: CLEAR_TASK})

export default reducer;