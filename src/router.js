import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link, 
  Switch,
} from 'react-router-dom'

export default function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/">
          <header className="App-header">
            <h1>Welcome to Musicly</h1>
          </header>
        </Route>
      </Switch>
    </Router>
  )
}