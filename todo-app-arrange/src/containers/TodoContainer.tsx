import * as React from 'react'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import Layout from './layout/Layout'
import { todoActionCreator } from '../redux/action'
import { IRootState } from '../redux/store'
import TodoComponent from '../components/TodoComponent'
import { ITodo } from 'src/redux/interfaces'
import { match } from 'react-router'

interface IStateToProps {
  todos: ITodo[]
}

interface IDispatchToProps {
  updateTodo: (index: number, _id: string, title: string) => void
  addTodo: (title: string) => void
  loadTodo: () => void
  removeTodo: (_id: string) => void
}

const mapStateToProps = (state: IRootState): IStateToProps => {
  const { todoState } = state
  return {
    todos: todoState.todos
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): IDispatchToProps => {
  return {
    updateTodo: (index: number, _id: string, title: string) => {
      dispatch(todoActionCreator.updateTodoAction(index, _id, title))
    },
    addTodo: (title: string) => {
      dispatch(todoActionCreator.addTodoAction(title, dispatch))
    },
    loadTodo: () => {
      dispatch(todoActionCreator.loadTodoAction(dispatch))
    },
    removeTodo: (_id: string) => {
      dispatch(todoActionCreator.removeTodoAction(_id))
    }
  }
}

type IProps = IStateToProps & IDispatchToProps & {match: match}
interface IState {
  isAdmin: boolean
}

/* tslint:disable:jsx-no-lambda */
class TodoContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      isAdmin: props.match.path === '/admin'
    }
    const { loadTodo } = this.props
    loadTodo()
  }

  public render(): JSX.Element {
    const { todos } = this.props
    const { isAdmin } = this.state
    return (
      <Layout isAdmin={isAdmin}>
        <TodoComponent
          isAdmin={isAdmin}
          todos={todos}
          onListChange={this.onListChange}
          onClickAddButton={this.onClickAddButton}
          onClickRemoveButton={this.onClickRemoveButton}
        />
      </Layout>
    )
  }

  private onListChange = (index: number, _id: string, title: string): void => {
    const { updateTodo } = this.props
    updateTodo(index, _id, title)
  }

  private onClickAddButton = (title: string): void => {
    const { addTodo } = this.props
    addTodo(title)
  }

  private onClickRemoveButton = (_id: string): void => {
    const { removeTodo } = this.props
    removeTodo(_id)
  }
}

export default connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)