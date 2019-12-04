import { Action, createStore, Store } from 'redux'

import reducer from './reducer'

export interface ITodoState {
  todos: string[]
}

export interface IRootState {
  todoState: ITodoState
}

const store: Store<ITodoState, Action> = createStore(reducer)

export default store