import React from 'react'
import { navigate } from '@reach/router'
import Layout from '../components/layout'
import { isLoggedIn } from '../utils/auth'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
import Login from '../components/Login';
Amplify.configure(config)

const IndexPage = () => {
  if (isLoggedIn()) {
    navigate("/app/home");
  }

  return (
    <Layout>
      {!isLoggedIn() && <Login />}
    </Layout>
  )
}

export default IndexPage
