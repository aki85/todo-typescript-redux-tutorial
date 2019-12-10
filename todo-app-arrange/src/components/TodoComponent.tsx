import * as React from 'react'
import { ITodo } from 'src/redux/interfaces'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap'

interface IProps {
  isAdmin: boolean
  todos: ITodo[]
  onListChange: (index: number, _id: string, title: string) => void
  onClickAddButton: (title: string) => void
  onClickRemoveButton: (_id: string) => void
}

interface IState {
  title: string
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      title: ''
    }
  }

  public render() {
    const { todos, isAdmin } = this.props
    const { title } = this.state
    return (
      <div className="main">
        <Form onSubmit={this.onClickAddButton}>
          <InputGroup className="mb-3">
            <FormControl
              value={title}
              onChange={this.onTitleChange}
            />
            <InputGroup.Append>
              <Button type="submit" variant="outline-secondary">追加</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <ul>
          {todos.map((todo, index) => {
            const reversedIndex = todos.length - index - 1
            return (<li key={reversedIndex}>
              <FormControl
                className="list-form"
                value={todos[reversedIndex].title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onListChange(reversedIndex, e)}
              />
              {isAdmin && <a tabIndex={-1} onClick={() => { this.onClickRemoveButton(reversedIndex) }}><i className="fa fa-times" /></a>}
            </li>)
          })}
        </ul>
      </div>
    )
  }

  private onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.currentTarget.value })
  }

  private onListChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { todos, onListChange } = this.props
    const todo = todos[index]
    onListChange(index, todo._id, e.target.value)
  }

  private onClickAddButton = (e: React.FormEvent) => {
    e.preventDefault()
    const { onClickAddButton } = this.props
    const { title } = this.state
    onClickAddButton(title)
  }

  private onClickRemoveButton = (index: number) => {
    const { todos, onClickRemoveButton } = this.props
    onClickRemoveButton(todos[index]._id)
  }
}