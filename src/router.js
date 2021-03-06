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
          padding: '0 8px',
        }}>
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            height: 'inherit',
            justifyContent: 'center'
          }}>
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