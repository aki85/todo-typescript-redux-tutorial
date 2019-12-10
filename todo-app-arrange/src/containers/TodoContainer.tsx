import * as React from 'react'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { todoActionCreator } from '../redux/action'
import { IRootState } from '../redux/store'
import TodoComponent from '../components/TodoComponent'

interface IStateToProps {
  todos: string[]
}

interface IDispatchToProps {
  addTodo: (todo: string) => void,
  loadTodo: () => void
}

const mapStateToProps = (state: IRootState): IStateToProps => {
  const { todoState } = state
  return {
    todos: todoState.todos
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): IDispatchToProps => {
  return {
    addTodo: (todo: string) => {
      dispatch(todoActionCreator.addTodoAction(todo))
    },
    loadTodo: () => {
      dispatch(todoActionCreator.loadTodoAction(dispatch))
    }
  }
}

type IProps = IStateToProps & IDispatchToProps

/* tslint:disable:jsx-no-lambda */
class TodoContainer extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props)
    const { loadTodo } = this.props
    loadTodo()
  }

  public render(): JSX.Element {
    const { todos } = this.props
    return (
      <TodoComponent todos={todos} onClickAddButton={this.onClickAddButton} />
    )
  }

  private onClickAddButton = (todo: string): void => {
    const { addTodo } = this.props
    addTodo(todo)
  }
}

export default connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)