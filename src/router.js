import React from 'react'
import {
  BrowserRouter,
  Route,
  Link, 
  Switch,
} from 'react-router-dom'
import { HomePage } from './pages'

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{
          backgroundColor: '#0eadb3',
          height: '62px',
        }}>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}