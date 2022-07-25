import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

const Welcome = () => {
  return (
    <Fragment>
      <h1>Welcome</h1>
      <Route path="/welcome/user">
        <p>welcome messi</p>
      </Route>
    </Fragment>
  )
}

export default Welcome