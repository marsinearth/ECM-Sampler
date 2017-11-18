import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as modalReducer } from 'react-redux-modal';
import albums from './albums';
import musicPlay from './musicPlay';
import visibilityFilter from './visibilityFilter';
import * as asyncInitialState from 'redux-async-initial-state';

const reducer = asyncInitialState.outerReducer(combineReducers({
    albums,
    musicPlay,
    visibilityFilter,
    modals: modalReducer,
    asyncInitialState: asyncInitialState.innerReducer
}));

const loadStore = (currentState) => {
    return new Promise(resolve => {
        fetch('/load')
            .then(res => res.json())
            .then(albums_fetched => {
	            resolve({
	                ...currentState,
	                albums: albums_fetched
	            })
            });
    });
};

const samplerStore = createStore(
    reducer,
    compose(applyMiddleware(asyncInitialState.middleware(loadStore)))
);

export default samplerStore;
