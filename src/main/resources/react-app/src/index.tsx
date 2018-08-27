import * as React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import * as ReactDOM from 'react-dom';
import Index from './pages/index';
import { Provider } from 'react-redux';

import rootReducer from './redux/reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const middlewares = [thunk, middleware];

export const store = createStore(
    combineReducers({routing: routerReducer, ...rootReducer}),
    composeWithDevTools(applyMiddleware(...middlewares))
);

// ReactDOM.render(<Index />, document.querySelector('#root'));

const renderer = (Component: any) =>
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        document.getElementById('root')
    );

renderer(Index);