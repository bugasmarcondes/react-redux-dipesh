import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Header from 'containers/Header'
import ProductListing from 'containers/ProductListing'
import ProductDetail from 'containers/ProductDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={ProductListing} exact />
          <Route path="/product/:productId" component={ProductDetail} exact />
          <Route>Not found!</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
