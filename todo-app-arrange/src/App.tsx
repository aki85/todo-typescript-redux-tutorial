import * as React from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import TodoContainer from './containers/TodoContainer'

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <TodoContainer />
      </Provider>
    )
  }
}

export default App