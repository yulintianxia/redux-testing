import React, { Component } from 'react';
import store from './store';
import { INPUTCHANGEVALUE, ADD, DEL, GET_LIST, GET_MY_LIST } from './store/actions';
import { actionChangeValue, getTodoList,getSagaListAction } from './store/actionCreators';

/*分离ui组件 */
import TodolistUI from './TodoListUi';
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        /* 绑定this */
        this.changeInputValue = this.changeInputValue.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.delClick = this.delClick.bind(this);
        /* 订阅 */
        store.subscribe(this.storeChange);
    }
    render() {
        return (<TodolistUI
            inputValue={this.state.inputValue}
            changeInputValue={this.changeInputValue}
            clickAdd={this.clickAdd}
            list={this.state.list}
            delClick={this.delClick}
        />)

    }
    componentDidMount() {
        /* 分离代码使用thunk, action 是一个函数*/
        // let action = getTodoList();
        // actionChangeValue(action);
        /* 使用saga */
        actionChangeValue(GET_MY_LIST);
    }
    /* 修改state */
    storeChange() {
        this.setState(store.getState());
    }
    /* 修改inpt的值 */
    changeInputValue(e) {
        actionChangeValue(INPUTCHANGEVALUE, e.target.value);
    }
    clickAdd() {
        actionChangeValue(ADD);
    }
    delClick(index) {
        console.log(index);
        actionChangeValue(DEL, index);
    }
}
export default Todolist;