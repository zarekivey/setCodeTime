import { createStore , combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import timesReducer from '../reducers/times';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth'


// This needs to be done if we are using devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({ // combines reducers, takes a key value pair. key = the root state name and then its reducer
            times: timesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

  return store;
};

 
