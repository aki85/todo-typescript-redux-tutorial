import { combineReducers, Reducer } from 'redux';

import { IAddTodoAction, TodoAction, TodoActionType } from './action';
import { IRootState, ITodoState } from './store';

// ITodoStateの初期データを作成
const initTodoState: ITodoState = {
  todos: []
};

// Todoで発生するactionに対応してReduxのstateを返すReducerを作成
const todoReducer: Reducer<ITodoState> = (
  state: ITodoState = initTodoState,
  action: TodoAction
): ITodoState => {
  // 関数の引数として渡されてきたactionのtypeを見てReduxのstateを返す
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      // ADD_TODOの場合はactionのpayloadに新しいtodoが詰められているので
      // それを取り出してtodosに追加して新しいstateとして返す
      const addTodoAction: IAddTodoAction = action;
      return {
        ...state,
        todos: state.todos.concat([addTodoAction.payload.todo])
      };
    default:
      return state;
  }
};

// 全てを集約したReducerを作成
const reducer: Reducer<IRootState> = combineReducers({
  todoState: todoReducer
});

export default reducer;