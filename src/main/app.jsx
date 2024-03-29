import React from 'react'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import Menu from '../template/menu'
import Routes from './routes'

const App = props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
)

export default App