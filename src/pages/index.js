import React from 'react'
import { navigate } from '@reach/router'
import { isLoggedIn } from '../utils/auth'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
import Login from '../components/Login'
Amplify.configure(config)

const IndexPage = () => {
  if (!isLoggedIn()) {
    navigate("/app/login");
  }

  return (
    <>
      <Login />
    </>
  )
}

export default IndexPage
