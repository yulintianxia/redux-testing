import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_MY_LIST,GET_LIST } from './actions';
import { actionChangeValue } from './actionCreators';
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  const res = yield axios.get('http://localhost:8080/data');
  const action = actionChangeValue(GET_LIST, res.data, false);
  yield put(action);
}

export default mySaga;
