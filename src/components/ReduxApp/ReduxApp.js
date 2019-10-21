import React from 'react';
import {connect} from 'react-redux';
import {getTodolistsTC, addTodolistTC} from '../../redux/reducer';
import ReduxAppView from "./ReduxAppView";

class ReduxApp extends React.Component {
    componentDidMount() {
        this.props.getTodolists()
    }

    addTodolist = (title) => {
        this.props.addTodolist(title)
    };

    render() {
        return <ReduxAppView {...this.props} addTodolist={this.addTodolist}/>

    }

}

let mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        todolists: state.todolists
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getTodolists: () => {
            dispatch(getTodolistsTC());
        },
        addTodolist: (title) => {
            dispatch(addTodolistTC(title));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);