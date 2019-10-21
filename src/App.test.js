import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReduxApp from "./components/ReduxApp/ReduxApp";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReduxApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
