import { Action, Dispatch } from 'redux'

import { TodoActionType } from './action'

export interface ITodo {
  _id: string
  title: string
  is_done?: boolean
  created_by?: string
  created_at?: string
  updated_at?: string
}

export interface ITodoState {
  todos: ITodo[]
}

export interface ILoadTodoAction extends Action {
  type: TodoActionType.LOAD_TODO
}

export interface ISetTodoAction extends Action {
  type: TodoActionType.SET_TODO
  payload: {
    todos: ITodo[]
  }
}

export interface IAddTodoAction extends Action {
  type: TodoActionType.ADD_TODO
  payload: {
    todo: ITodo
  }
}

export interface IUpdateTodoAction extends Action {
  type: TodoActionType.UPDATE_TODO
  payload: {
    index: number,
    title: string
  }
}

export interface IRemoveTodoAction extends Action {
  type: TodoActionType.REMOVE_TODO
  payload: {
    _id: string
  }
}

export interface ITodoActionCreator {
  loadTodoAction(dispatch: Dispatch<Action>): ILoadTodoAction
  setTodoAction(todos: ITodo[]): ISetTodoAction
  addTodoAction(title: string, dispatch: Dispatch<Action>): IAddTodoAction
  updateTodoAction(index: number, _id: string, title: string): IUpdateTodoAction
  removeTodoAction(_id: string): IRemoveTodoAction
}