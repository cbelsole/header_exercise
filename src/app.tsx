import React from 'react'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Login from './components/Login'
import { Router } from '@reach/router'

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/"></Home>
      <About path="/about"></About>
      <ContactUs path="/contact"></ContactUs>
      <Login path="/login"></Login>
    </Router>
  )
}

export default App
