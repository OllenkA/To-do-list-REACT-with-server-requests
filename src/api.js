import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:  {'API-KEY': '385bff6a-3ed2-44f8-99e7-e1f4af74d717'}
});

// const _getTasksQueue = [];
// setInterval( () => {
//     if (_getTasksQueue.length > 0) {
//         let firstItem = _getTasksQueue.shift();
//         //firstItem.resolve();
//         instance.get(`todo-lists/${firstItem.todolistId}/tasks`)
//             .then(res => {
//                 firstItem.resolve(res);
//             });
//     }

// }, 2000);

export const todolistAPI = {
    // createTodolist(todolistTitle) {
    //     return instance.post('todo-lists', {todolistTitle});
    // },
    getTodolists() {
        return instance.get('todo-lists');
    },
    // getTasks(todolistId) {
    //     let promise = new Promise( (resolve) => {
    //         let item = {
    //             resolve: resolve,
    //             todolistId: todolistId
    //         };
    //         _getTasksQueue.push(item);
    //     } );
    //     // put to queue
    //     // return instance.get(`todo-lists/${todolistId}/tasks`);
    //     return promise;
    // },
    getTasks(todolistId) {
        return instance.get(`todo-lists/${todolistId}/tasks`)
    },
    //... methods for tasks
    updateTask(task) {
        return instance.put('todo-lists/tasks', task);
    },
    addTodolist(title) {
        return instance.post('todo-lists', {title});
    },
    addTask(todolistId, title) {
       return instance.post(`todo-lists/${todolistId}/tasks`, {title});
    },
    deleteTodolist(todolistId) {
        return instance.delete(`todo-lists/${todolistId}`);
    },
    deleteTask(taskId) {
        return instance.delete(`todo-lists/tasks/${taskId}`);
    }
 };


export default instance;