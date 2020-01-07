import store from "./index";
import axios from 'axios';
import { GET_MY_LIST, GET_LIST } from './actions';
export const actionChangeValue = (action, data = '' , isDispatch = true) => {
    let actionType;
    if (action instanceof Function) {
        actionType = action;
    } else {
        actionType = {
            type: action,
            data
        }
    }
    if (isDispatch) {
       return store.dispatch(actionType);
    } else {
        return actionType; 
    }  
}


export const getTodoList = () => {
    return () => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
            const data = res.data.data || [];
            actionChangeValue(GET_LIST, data);

        }, (reject) => {
            console.error(reject)
        })
    }

}




