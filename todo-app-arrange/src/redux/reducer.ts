import { combineReducers, Reducer } from 'redux'

import { TodoAction, TodoActionType } from './action'
import { ITodoState, ITodo } from './interfaces'
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
    case TodoActionType.UPDATE_TODO:
        state.todos[action.payload.index].title = action.payload.title
        const todos: ITodo[] = []
        return {
          ...state,
          todos: todos.concat(state.todos)
        }
    case TodoActionType.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload._id)
      }
    default:
      return state
  }
}

const reducer: Reducer<IRootState> = combineReducers({
  todoState: todoReducer
})

export default reducer