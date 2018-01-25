import { createStore, applyMiddleware } from 'redux';
import reducer from '../store/reducer';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, logger);

export default createStore(reducer,  middleware);