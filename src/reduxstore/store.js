import { createStore, applyMiddleware } from 'redux';
import { middleware1 } from './middleware';
import { Reducer1 } from "./reducers";
import createSagaMiddleware from 'react-saga';
import { RootSaga } from './sagas';



var sagaMiddleware = createSagaMiddleware()


// We are just opening a store 

var store = createStore(Reducer1, applyMiddleware(middleware1, sagaMiddleware))

sageMiddleware.run(RootSaga)
export default store 



