import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './.reducers/reducers.jsx';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import Home from './components/pages/home.jsx';
import FullStack from './components/pages/fullStack.jsx';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

const Routes = (
    <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/fullstack" component={FullStack}/>
    </Route>
    </Router>
    </Provider>
);

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
