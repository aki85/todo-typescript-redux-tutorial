import { combineReducers, Reducer } from 'redux'

import { IAddTodoAction, TodoAction, TodoActionType } from './action'
import { IRootState, ITodoState } from './store'

const initTodoState: ITodoState = {
  todos: []
}

const todoReducer: Reducer<ITodoState> = (
  state: ITodoState = initTodoState,
  action: TodoAction
): ITodoState => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      const addTodoAction: IAddTodoAction = action
      return {
        ...state,
        todos: state.todos.concat([addTodoAction.payload.todo])
      }
    default:
      return state
  }
}

// 全てを集約したReducerを作成
const reducer: Reducer<IRootState> = combineReducers({
  todoState: todoReducer
})

export default reducer