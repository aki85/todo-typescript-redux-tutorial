import { Action, Dispatch } from 'redux'
import { IAddTodoAction, IRemoveTodoAction, ILoadTodoAction, ISetTodoAction, ITodoActionCreator, ITodo, IUpdateTodoAction } from './interfaces'
import axios from '../utils/axios'
import uuidv4 from 'uuid/v4'

export enum TodoActionType {
  LOAD_TODO = 'LOAD_TODO',
  SET_TODO = 'SET_TODO',
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
}

export type TodoAction = IAddTodoAction & ILoadTodoAction & ISetTodoAction & IUpdateTodoAction & IRemoveTodoAction

class TodoActionCreator implements ITodoActionCreator {
  public loadTodoAction = (dispatch: Dispatch<Action>): ILoadTodoAction => {
    let uuid = localStorage.getItem('uuid')
    if (!uuid) {
      uuid = uuidv4()
      localStorage.setItem('uuid', uuid)
      axios.post('api/v1/user/', {uuid, name: uuid})
    }
    axios.post('api/v1/auth/', {uuid}).then((res) => {
      axios.get('api/v1/todo/', {params: {token: res.data.token}}).then((res) => {
        const todos = res.data
        dispatch(this.setTodoAction(todos))
      })
    })
    
    return {
      type: TodoActionType.LOAD_TODO
    }
  }
  public setTodoAction = (todos: ITodo[]): ISetTodoAction => {
    return {
      payload: {
        todos
      },
      type: TodoActionType.SET_TODO
    }
  }
  public addTodoAction = (title: string, dispatch: Dispatch<Action>): IAddTodoAction => {
    const uuid = localStorage.getItem('uuid')
    axios.post('api/v1/auth/', {uuid}).then((res) => {
      axios.post('api/v1/todo/', {title}, {params: {token: res.data.token}}).then((res) => {
        const todos = res.data
        dispatch(this.setTodoAction(todos))
      })
    })
    return {
      payload: {
        todo: {_id: uuidv4(), title}
      },
      type: TodoActionType.ADD_TODO
    }
  }
  public updateTodoAction = (index: number, _id: string, title: string): IUpdateTodoAction => {
    const uuid = localStorage.getItem('uuid')
    axios.post('api/v1/auth/', {uuid}).then((res) => {
      axios.put('api/v1/todo/'+_id+'/', {title}, {params: {token: res.data.token}})
    })
    return {
      type: TodoActionType.UPDATE_TODO,
      payload: {
        index,
        title
      }
    }
  }
  public removeTodoAction = (_id: string): IRemoveTodoAction => {
    const uuid = localStorage.getItem('uuid')
    axios.post('api/v1/auth/', {uuid}).then((res) => {
      axios.delete('api/v1/todo/'+_id+'/', {params: {token: res.data.token}})
    })
    return {
      type: TodoActionType.REMOVE_TODO,
      payload: {
        _id
      }
    }
  }
}

export const todoActionCreator: ITodoActionCreator = new TodoActionCreator()