// App.tsx
import * as React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import TodoContainer from './TodoContainer'

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