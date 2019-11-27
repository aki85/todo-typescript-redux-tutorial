import { Action, createStore, Store } from 'redux';

import reducer from './reducer';

// Storeが持つTodoにの状態を定義
export interface ITodoState {
  todos: string[];
}

// 全てのStateを集約したStateを定義
export interface IRootState {
  todoState: ITodoState;
}

// importしたreducerを渡してstoreを作成
const store: Store<ITodoState, Action> = createStore(reducer);

export default store;