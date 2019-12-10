import { combineReducers, Reducer } from 'redux'

import { TodoAction, TodoActionType } from './action'
import { ITodoState } from './interfaces'
import { IRootState } from './store'

const initTodoState: ITodoState = {
  todos: []
}

const todoReducer: Reducer<ITodoState> = (
  state: ITodoState = initTodoState,
  action: TodoAction
): ITodoState => {
  switch (action.type) {
    case TodoActionType.LOAD_TODO:
      return state
    case TodoActionType.SET_TODO:
      return {
        ...state,
        todos: action.payload.todos
      }
    case TodoActionType.ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat([action.payload.todo])
      }
    default:
      return state
  }
}

const reducer: Reducer<IRootState> = combineReducers({
  todoState: todoReducer
})

export default reducer