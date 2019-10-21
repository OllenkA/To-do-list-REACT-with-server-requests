import React from 'react';
// import MainPage from "../MainPage/MainPage";
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ReduxApp from "./components/ReduxApp/ReduxApp";

class App extends React.Component {

    render() {
        return <>
            <Route exact path='/' render={() => <MainPage/>}/>
            <Route path='/mySchedule'
                   render={() => <ReduxApp {...this.props} addTodolist={this.addTodolist}/>}/>
        </>
    }

}

export default App;