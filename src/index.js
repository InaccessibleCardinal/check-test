import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './redux/reducers';

const store = createStore(reducer);

function renderApp(){
  ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
    document.getElementById('root'));
}

store.subscribe(renderApp);
renderApp();
