import { Action, Dispatch } from 'redux'

import { TodoActionType } from './action'

export interface ITodoState {
  todos: string[]
}

export interface ILoadTodoAction extends Action {
  type: TodoActionType.LOAD_TODO
  payload: {}
}

export interface ISetTodoAction extends Action {
  type: TodoActionType.SET_TODO
  payload: {
    todos: string[]
  }
}

export interface IAddTodoAction extends Action {
  type: TodoActionType.ADD_TODO
  payload: {
    todo: string
  }
}

export interface ITodoActionCreator {
  loadTodoAction(dispatch: Dispatch<Action>): ILoadTodoAction
  setTodoAction(todos: string[]): ISetTodoAction
  addTodoAction(todo: string): IAddTodoAction
}
