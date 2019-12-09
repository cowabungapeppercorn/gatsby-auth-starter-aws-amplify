import React from 'react'
import { navigate } from '@reach/router'
import Layout from '../components/layout'
import { isLoggedIn } from '../utils/auth'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
import Login from '../components/Login';
Amplify.configure(config)

<<<<<<< HEAD
const IndexPage = () => {
  if (isLoggedIn) {
    navigate("/app/home");
  }

  return (
    <Layout>
      {!isLoggedIn && <Login />}
    </Layout>
  )
}
=======
const IndexPage = () => (
  <Layout>
    {!isLoggedIn && <Login />}
    {isLoggedIn && navigate("/app/home")}
  </Layout>
)
>>>>>>> b8093802a1f4d7f22bf0bf84cc54031d3b9d97ef

export default IndexPage
