
/* 定义type的action行为 */
import { INPUTCHANGEVALUE, ADD, DEL, GET_LIST } from './actions';
const defaultStore = {
    inputValue: 'write something',
    list: [
        '111',
        '2222',
        '3333'
    ]
};

export default (state = defaultStore, action) => {
    switch (action.type) {
        /* readucers的返回必须纯函数,不能对原来的状态进行修改 */
        case INPUTCHANGEVALUE:
             let newState = Object.assign({}, state, { inputValue: action.value });
            return newState;
        case ADD:
            let addState = JSON.parse(JSON.stringify(state));
            addState.list.push(addState.inputValue);
            addState.inputValue = '';
            return addState;
        case DEL:
            let delState = {...state};
            delState.list.splice(action.index, 1)
            return delState;
        case GET_LIST: 
           let getState = {...state};
           getState.list = action.value.list || [];
           return getState
        default:
            return state
    };
}