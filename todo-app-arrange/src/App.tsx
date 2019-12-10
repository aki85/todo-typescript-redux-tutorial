import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import TodoContainer from './containers/TodoContainer'

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact={true} path='/' component={TodoContainer} />
            <Route path='/admin' component={TodoContainer} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App