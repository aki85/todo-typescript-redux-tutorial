import { Action } from 'redux'

export enum TodoActionType {
  ADD_TODO = 'ADD_TODO'
}

export interface IAddTodoAction extends Action {
  type: TodoActionType.ADD_TODO
  payload: {
    todo: string
  }
}

export type TodoAction = IAddTodoAction

export interface ITodoActionCreator {
  addTodoAction(todo: string): IAddTodoAction
}

class TodoActionCreator implements ITodoActionCreator {
  public addTodoAction = (todo: string): IAddTodoAction => {
    return {
      payload: {
        todo
      },
      type: TodoActionType.ADD_TODO
    }
  }
}

export const todoActionCreator: ITodoActionCreator = new TodoActionCreator()