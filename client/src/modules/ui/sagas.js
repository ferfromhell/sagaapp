import {takeEvery, call, put} from 'redux-saga/effects';
import {} from './api';
import { 
  REQUEST_ADD_ITEM,
  requestAddItem, 
  receiveAddItem
} from './actions';

function* callRequestAddItem(action){
  //Code needed
  yield put(receiveAddItem(action.payload));
}

export function* requestAddItemSaga(){
  yield takeEvery(REQUEST_ADD_ITEM, callRequestAddItem);
}