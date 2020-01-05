import store from "./index";
import axios from 'axios';
export const actionChangeValue = (action, value = '') => {
    const actionType = {
        type: action,
        value
    }
    store.dispatch(actionType);
}

export const getTodoList = () => {
    return () => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
            const data = res.data.data || [];
            return data;
        }, (reject) => {
            console.error(reject)
        })
    }

}