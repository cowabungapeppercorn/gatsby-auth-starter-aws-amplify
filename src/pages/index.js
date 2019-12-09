import React from 'react'
import { navigate } from '@reach/router'
import Layout from '../components/layout'
import { isLoggedIn } from '../utils/auth'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
import Login from '../components/Login';
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    {!isLoggedIn && <Login />}
    {isLoggedIn && navigate("/app/home")}
  </Layout>
)

export default IndexPage
