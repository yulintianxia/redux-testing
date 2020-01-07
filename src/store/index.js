import { createStore, applyMiddleware, compose } from 'redux'  //  引入createStore方法
import reducer from './reducers';
/* thunk */
// import  thunk from 'redux-thunk';
import creatSagaMiddleware from 'redux-saga';
import mysagas from './mysagas';
const sagaMiddleware = creatSagaMiddleware();
/* thunk 中间件 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE ?
window.__REDUX_DEVTOOLS_EXTENSION__({}): compose

// const enhancer = composeEnhancers(applyMiddleware(thunk));
// const store = createStore(reducer, applyMiddleware(thunk)) // 创建数据存储仓库
// const store = createStore(reducer, enhancer) // 创建数据存储仓库
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer); //使用sage配置
sagaMiddleware.run(mysagas);
export default store   //暴露出去