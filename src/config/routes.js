import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import XipsoloList from '../pages/XipsoloList'
import XipsoloShow from '../pages/XipsoloShow'
import NewXipsolo from '../pages/NewXipsolo'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default (props) => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path="/xipsolos/new" component={ NewXipsolo } />
    <Route path='/xipsolos/:id' component={ XipsoloShow } />
    <Route path='/xipsolos' component={ XipsoloList } />
    <Route path="/profile" component={ Profile } />
    <Route path="/register" component={ Register } />
    <Route path="/login" render={ (routeProps) => {
      return <Login 
               { ...routeProps }
               currentUser={ props.currentUser }
               storeUser={ props.storeUser }
             />
    } } />
    
  </Switch>
)

