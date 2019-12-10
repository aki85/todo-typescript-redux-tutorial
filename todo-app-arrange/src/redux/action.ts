import { Action, Dispatch } from 'redux'
import { IAddTodoAction, ILoadTodoAction, ISetTodoAction, ITodoActionCreator } from './interfaces'
import axios from '../utils/axios'
import uuidv4 from 'uuid/v4'

export enum TodoActionType {
  LOAD_TODO = 'LOAD_TODO',
  SET_TODO = 'SET_TODO',
  ADD_TODO = 'ADD_TODO',
}

export type TodoAction = IAddTodoAction & ILoadTodoAction & ISetTodoAction

class TodoActionCreator implements ITodoActionCreator {
  public loadTodoAction = (dispatch: Dispatch<Action>): ILoadTodoAction => {
    let uuid = localStorage.getItem('uuid')
    if (!uuid) {
      uuid = uuidv4()
      localStorage.setItem('uuid', uuid)
    }
    axios.post('api/v1/auth/', {uuid}).then((res) => {
      axios.get('api/v1/todo/', {params: {token: res.data.token}}).then((res) => {
        const todos = res.data.map((todo: any) => todo.title)
        dispatch(this.setTodoAction(todos))
      })
    })
    
    return {
      payload: {
        todos: []
      },
      type: TodoActionType.LOAD_TODO
    }
  }
  public setTodoAction = (todos: string[]): ISetTodoAction => {
    return {
      payload: {
        todos
      },
      type: TodoActionType.SET_TODO
    }
  }
  public addTodoAction = (todo: string): IAddTodoAction => {
    const uuid = localStorage.getItem('uuid')
    axios.post('api/v1/auth/', {uuid}).then((res) => {
      axios.post('api/v1/todo/', {title: todo}, {params: {token: res.data.token}})
    })
    return {
      payload: {
        todo
      },
      type: TodoActionType.ADD_TODO
    }
  }
}

export const todoActionCreator: ITodoActionCreator = new TodoActionCreator()