(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,a){t.exports={container:"MainPage_container__3hR0Z",particles:"MainPage_particles__1NkSn",text:"MainPage_text__7FMP3",main:"MainPage_main__2kosF",it:"MainPage_it__1jHFr",but:"MainPage_but__2Yr1D"}},15:function(t,e,a){t.exports={check:"TodoListTask_check__2l39I",task:"TodoListTask_task__APEq0",activeTask:"TodoListTask_activeTask__20hHx",text:"TodoListTask_text__2FIY8",priority:"TodoListTask_priority__1uyuM",delImg:"TodoListTask_delImg__7v8Ou",taskTitle:"TodoListTask_taskTitle__2ImLy"}},18:function(t,e,a){t.exports={container:"ReduxApp_container__H_XaG",wrapper:"ReduxApp_wrapper__1rGGm",start:"ReduxApp_start__uRSdi",nav:"ReduxApp_nav__1XwW6",back:"ReduxApp_back__3Vcci",motivation:"ReduxApp_motivation__3ek3G",title:"ReduxApp_title__2VhlJ"}},21:function(t,e,a){t.exports={form:"AddNewItemForm_form__kp7_6",but:"AddNewItemForm_but__1Fqa6",error:"AddNewItemForm_error__2cN4X",lot:"AddNewItemForm_lot__lU8_A"}},24:function(t,e,a){t.exports={footer:"TodoListFooter_footer__oGz9w",filterActive:"TodoListFooter_filterActive__3RvCs"}},28:function(t,e,a){t.exports=a.p+"static/media/delete-button.d4798137.svg"},34:function(t,e,a){t.exports={titleGoal:"TodoListTitle_titleGoal__Yt1mF",del:"TodoListTitle_del__39o9k"}},35:function(t,e,a){t.exports={todoList:"ReduxTodoList_todoList__150Ee",nameGoal:"ReduxTodoList_nameGoal__xxCvJ"}},50:function(t,e,a){t.exports={allTasks:"TodoListTasks_allTasks__1U5Ue"}},51:function(t,e,a){t.exports=a.p+"static/media/back-navigational-arrow-button-pointing-to-left-svgrepo-com.fec27d6e.svg"},52:function(t,e,a){t.exports=a(80)},57:function(t,e,a){},80:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(26),s=a.n(i);a(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(20),c=a(23),l=a(10),d=a(25),u=a(46).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"385bff6a-3ed2-44f8-99e7-e1f4af74d717"}}),m=function(){return u.get("todo-lists")},p=function(t){return u.get("todo-lists/".concat(t,"/tasks"))},f=function(t){return u.put("todo-lists/tasks",t)},k=function(t){return u.post("todo-lists",{title:t})},T=function(t,e){return u.post("todo-lists/".concat(t,"/tasks"),{title:e})},h=function(t){return u.delete("todo-lists/".concat(t))},_=function(t){return u.delete("todo-lists/tasks/".concat(t))},E={tasks:[],todolists:[],isTaskClear:!1},b=function(t){return{type:"ADD_TASK",task:t}},g=function(t){return{type:"ADD-TODOLIST",todolist:t}},v=function(t){return{type:"DELETE-TASK",taskId:t}},C=function(t){return{type:"DELETE-TODOLIST",todolistId:t}},O=function(t){return{type:"SET-TODOLISTS",todolists:t}},A=function(t){return{type:"SET-TASKS",tasks:t}},S=function(t){return{type:"UPDATE-TASK",task:t}},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-TODOLIST":var a=[e.todolist].concat(Object(d.a)(t.todolists));return Object(l.a)({},t,{todolists:a});case"SET-TODOLISTS":return Object(l.a)({},t,{todolists:e.todolists});case"SET-TASKS":return t.isTaskClear?Object(l.a)({},t,{tasks:e.tasks,isTaskClear:!1}):Object(l.a)({},t,{tasks:[].concat(Object(d.a)(e.tasks),Object(d.a)(t.tasks))});case"UPDATE-TASK":var n=t.tasks.map(function(t){return t.id===e.task.id?e.task:t});return Object(l.a)({},t,{tasks:n});case"ADD_TASK":var o=[e.task].concat(Object(d.a)(t.tasks));return Object(l.a)({},t,{tasks:o});case"DELETE-TASK":var i=t.tasks.filter(function(t){return t.id!==e.taskId});return Object(l.a)({},t,{tasks:i});case"DELETE-TODOLIST":var s=t.todolists.filter(function(t){return t.id!==e.todolistId});return Object(l.a)({},t,{todolists:s});case"CLEAR-TASK":return Object(l.a)({},t,{isTaskClear:!0});default:return t}},N=a(47),y=Object(c.c)(j,Object(c.a)(N.a)),I=a(16),w=a(4),L=a(19),x=a(6),F=a(5),D=a(7),M=a(14),R=a(11),G=a.n(R),H=a(48),P=a.n(H),V=function(t){return o.a.createElement("div",{className:G.a.container},o.a.createElement(P.a,{className:G.a.particles,params:{particles:{number:{value:160,density:{enable:!1}},size:{value:10,random:!0},move:{direction:"bottom",out_mode:"out"},line_linked:{enable:!1}},interactivity:{events:{onclick:{enable:!0,mode:"remove"}},modes:{remove:{particles_nb:10}}}}}),o.a.createElement("div",{className:G.a.text},o.a.createElement("h2",{className:G.a.main},"DREAM"),o.a.createElement("p",{className:G.a.it},"--- IT ---"),o.a.createElement("h2",{className:G.a.main},"WISH"),o.a.createElement("p",{className:G.a.it},"--- IT ---"),o.a.createElement("h2",{className:G.a.main},"DO"),o.a.createElement("p",{className:G.a.it},"--- IT ---")),o.a.createElement(I.b,{to:"/mySchedule"},o.a.createElement("button",{className:G.a.but},"START PLANNING YOUR PATH TO YOUR GOAL")))},K=a(21),U=a.n(K),Y=function(t){function e(t){var a;return Object(w.a)(this,e),(a=Object(x.a)(this,Object(F.a)(e).call(this,t))).state={error:!1,title:""},a.onTitleChange=function(t){a.setState({error:!1,title:t.currentTarget.value})},a.onAddItemClick=function(){var t=a.state.title;""===t?a.setState({error:!0}):(a.setState({error:!1}),a.props.addItem(t),a.setState({title:""}))},a.onDeleteItemClick=function(){a.setState({title:""})},a.onAddItemEnter=function(t){"Enter"===t.key&&a.onAddItemClick()},a.render=function(){var t=a.state.error?U.a.error:U.a.lot;return o.a.createElement("div",{className:U.a.form},o.a.createElement("input",{onKeyPress:a.onAddItemEnter,maxLength:"60",onChange:a.onTitleChange,className:t,type:"text",placeholder:a.props.goal,value:a.state.title}),o.a.createElement("button",{className:U.a.but,onClick:a.onAddItemClick},"Add",a.props.text),o.a.createElement("button",{className:U.a.but,onClick:a.onDeleteItemClick},"Clear input"))},a.newTaskTitleRef=o.a.createRef(),a}return Object(D.a)(e,t),e}(o.a.Component),W=a(34),J=a.n(W),q=a(28),B=a.n(q),X=function(t){return o.a.createElement("header",null,o.a.createElement("img",{className:J.a.del,src:B.a,alt:"",onClick:function(){t.deleteTodolist(t.id)}}),o.a.createElement("h3",{className:J.a.titleGoal},t.title))},z=a(50),Z=a.n(z),$=a(15),Q=a.n($),tt=function(t){function e(){var t,a;Object(w.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(x.a)(this,(t=Object(F.a)(e)).call.apply(t,[this].concat(i)))).onIsDoneChanged=function(t){var e=t.currentTarget.checked?2:0;a.props.onTaskStatusChanged(a.props.task.id,e)},a.onTitleChanged=function(t){a.setState({newTitle:t.currentTarget.value})},a.state={editMode:!1,newTitle:a.props.task.title},a.priority=["Low","Middle","High","Urgently","Later"],a.activateEditMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){a.props.changeTitle(a.props.task.id,a.state.newTitle),a.setState({editMode:!1})},a.onDeleteItemClick=function(){a.props.deleteTask(a.props.task.id)},a.render=function(){return o.a.createElement("div",{className:2===a.props.task.status?Q.a.activeTask:Q.a.task},o.a.createElement("input",{className:Q.a.check,type:"checkbox",checked:2===a.props.task.status,onChange:a.onIsDoneChanged}),o.a.createElement("div",{className:Q.a.text},a.state.editMode?o.a.createElement("input",{onBlur:a.deactivateEditMode,autoFocus:!0,value:a.state.newTitle,onChange:a.onTitleChanged}):o.a.createElement("span",{className:Q.a.taskTitle,onClick:a.activateEditMode},o.a.createElement("b",null,a.props.task.title)),o.a.createElement("i",{className:Q.a.priority},"Priority:",a.priority[a.props.task.priority])),o.a.createElement("img",{src:B.a,alt:"",onClick:a.onDeleteItemClick,className:Q.a.delImg}))},a}return Object(D.a)(e,t),e}(o.a.Component),et=function(t){var e=t.tasks.map(function(e){return o.a.createElement(tt,{key:e.id,task:e,onTaskStatusChanged:t.onTaskStatusChanged,changeTitle:t.changeTitle,deleteTask:t.deleteTask})});return o.a.createElement("div",{className:Z.a.allTasks},e)},at=a(24),nt=a.n(at),ot=function(t){function e(){var t,a;Object(w.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(x.a)(this,(t=Object(F.a)(e)).call.apply(t,[this].concat(i)))).state={isHidden:!0},a.onAllFilterClick=function(){a.props.onFilterChanged("All")},a.onCompletedFilterClick=function(){a.props.onFilterChanged("Completed")},a.onActiveFilterClick=function(){a.props.onFilterChanged("Active")},a.onShowFiltersClick=function(){a.setState({isHidden:!0})},a.onHideFiltersClick=function(){a.setState({isHidden:!1})},a.render=function(t){var e="All"===a.props.filterValue?nt.a.filterActive:"",n="Completed"===a.props.filterValue?nt.a.filterActive:"",i="Active"===a.props.filterValue?nt.a.filterActive:"";return o.a.createElement("footer",{className:nt.a.footer},a.state.isHidden&&o.a.createElement("div",null,o.a.createElement("button",{onClick:a.onAllFilterClick,className:e},"Show all tasks"),o.a.createElement("button",{onClick:a.onCompletedFilterClick,className:n},"Show completed tasks"),o.a.createElement("button",{onClick:a.onActiveFilterClick,className:i},"Show active tasks")),!a.state.isHidden&&o.a.createElement("button",{onClick:a.onShowFiltersClick,className:i},"Show all buttons"),a.state.isHidden&&o.a.createElement("button",{onClick:a.onHideFiltersClick,className:i},"Hide all buttons"))},a}return Object(D.a)(e,t),e}(o.a.Component),it=a(35),st=a.n(it),rt=function(t){return o.a.createElement("div",{className:st.a.todoList},o.a.createElement("div",{className:st.a.nameGoal},o.a.createElement(X,Object.assign({title:t.title},t,{deleteTodolist:t.deleteTodolist})),o.a.createElement(Y,Object.assign({},t,{goal:"Set tasks for your goal..!",text:" task",addItem:t.addTask}))),o.a.createElement(et,{onTaskStatusChanged:t.onTaskStatusChanged,changeTitle:t.changeTitle,deleteTask:t.deleteTask,tasks:t.tasks.filter(function(e){return"All"===t.filterValue||("Active"===t.filterValue?0===e.status:"Completed"===t.filterValue?2===e.status:null)})}),o.a.createElement(ot,{onFilterChanged:t.onFilterChanged,filterValue:t.filterValue}))},ct=function(t){function e(){var t,a;Object(w.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(x.a)(this,(t=Object(F.a)(e)).call.apply(t,[this].concat(i)))).state={filterValue:"All"},a.restoreState=function(){a.props.getTasks(a.props.id)},a.addTask=function(t){a.props.addTask(a.props.id,t)},a.deleteTodolist=function(t){a.props.deleteTodolist(t)},a.deleteTask=function(t){a.props.deleteTask(t)},a.onFilterChanged=function(t){a.setState({filterValue:t})},a.changeTask=function(t,e){var n=a.props.tasks.find(function(e){return e.id===t}),o=Object(l.a)({},n,e);a.props.updateTask(o)},a.onTaskStatusChanged=function(t,e){a.changeTask(t,{status:e})},a.changeTitle=function(t,e){a.changeTask(t,{title:e})},a.render=function(){return o.a.createElement(rt,Object.assign({},a.props,{deleteTodolist:a.deleteTodolist,deleteTask:a.deleteTask,addTask:a.addTask,filterValue:a.state.filterValue,isFetching:a.state.isFetching,onTaskStatusChanged:a.onTaskStatusChanged,changeTitle:a.changeTitle,onFilterChanged:a.onFilterChanged}))},a}return Object(D.a)(e,t),Object(L.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}},{key:"componentWillUnmount",value:function(){this.props.clearTasks()}}]),e}(o.a.Component),lt=Object(r.b)(function(t){return{}},function(t){return{getTasks:function(e){t(function(t){return function(e){p(t).then(function(t){e(A(t.data.items))})}}(e))},addTask:function(e,a){t(function(t,e){return function(a){T(t,e).then(function(t){a(b(t.data.data.item))})}}(e,a))},deleteTask:function(e){t(function(t){return function(e){_(t).then(function(a){e(v(t))})}}(e))},deleteTodolist:function(e){t(function(t){return function(e,a){h(t).then(function(a){e(C(t))})}}(e))},updateTask:function(e){t(function(t){return function(e,a){f(t).then(function(a){0===a.data.resultCode&&e(S(t))})}}(e))},clearTasks:function(){t({type:"CLEAR-TASK"})}}})(ct),dt=a(18),ut=a.n(dt),mt=a(51),pt=a.n(mt),ft=function(t){return o.a.createElement("header",{className:ut.a.container},o.a.createElement(I.b,{to:"/",className:ut.a.nav},o.a.createElement("img",{className:ut.a.back,src:pt.a,alt:""})),o.a.createElement("h1",{className:ut.a.title},"MY GOALS"),o.a.createElement("blockquote",{className:ut.a.motivation},"SET A GOAL AND DEFINE A TASK TO ACHIEVE IT"),o.a.createElement(Y,{addItem:t.addTodolist,goal:"SET GOAL(max 60 symbols)",text:" goal"}),o.a.createElement("div",{className:ut.a.wrapper},t.todolists.map(function(e){return o.a.createElement(lt,{key:e.id,id:e.id,title:e.title,tasks:t.tasks.filter(function(t){return t.todoListId===e.id})})})))},kt=function(t){function e(){var t,a;Object(w.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(x.a)(this,(t=Object(F.a)(e)).call.apply(t,[this].concat(o)))).addTodolist=function(t){a.props.addTodolist(t)},a}return Object(D.a)(e,t),Object(L.a)(e,[{key:"componentDidMount",value:function(){this.props.getTodolists()}},{key:"render",value:function(){return o.a.createElement(ft,Object.assign({},this.props,{addTodolist:this.addTodolist}))}}]),e}(o.a.Component),Tt=Object(r.b)(function(t){return{tasks:t.tasks,todolists:t.todolists}},function(t){return{getTodolists:function(){t(function(t){m().then(function(e){t(O(e.data))})})},addTodolist:function(e){t(function(t){return function(e){k(t).then(function(t){e(g(t.data.data.item))})}}(e))}}})(kt),ht=function(t){function e(){return Object(w.a)(this,e),Object(x.a)(this,Object(F.a)(e).apply(this,arguments))}return Object(D.a)(e,t),Object(L.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,{exact:!0,path:"/",render:function(){return o.a.createElement(V,null)}}),o.a.createElement(M.a,{path:"/mySchedule",render:function(){return o.a.createElement(Tt,Object.assign({},t.props,{addTodolist:t.addTodolist}))}}))}}]),e}(o.a.Component);s.a.render(o.a.createElement(I.a,null,o.a.createElement(r.a,{store:y},o.a.createElement(ht,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.a801e46f.chunk.js.map