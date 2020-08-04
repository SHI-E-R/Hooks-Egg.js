import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../static/css/Main.css'
import Login from './Login'
import AdminIndex from './AdminIndex'

function Main() {
  return (
    <Router>
      <Route path='/' exact component={Login}  />
      <Route path='/index/' exact component={AdminIndex} />
    </Router>
  )
}

export default Main