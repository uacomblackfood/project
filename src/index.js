import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
// import thunk from 'redux-thunk'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { routerMiddleware } from 'react-router-redux'

// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'

// import reducer, { history } from './reducers/index'
import { ParallaxProvider } from 'react-scroll-parallax'

// const store = createStore(
//   reducer,
//   applyMiddleware(routerMiddleware(history), thunk)
// )

export const Application = () => {ReactDOM.render(
  <ParallaxProvider>
    {/* <Provider store={store}> */}
      <Router>
        <Switch>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    {/* </Provider> */}
  </ParallaxProvider>,
  document.getElementById('root')
)}

// store.subscribe(Application)

Application()
