import { Action, createStore, Store } from 'redux'

import reducer from './reducer'

import { ITodoState } from './interfaces'

export interface IRootState {
  todoState: ITodoState
}

const store: Store<ITodoState, Action> = createStore(reducer)

export default store