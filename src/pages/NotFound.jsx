import React from 'react'
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>This page does not exis</h2><br /><hr />
      <p><Link to="/">Back to Home page</Link></p>
    </div>
  )
}

export default NotFound
