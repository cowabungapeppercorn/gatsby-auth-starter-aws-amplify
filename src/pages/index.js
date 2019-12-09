import React from 'react'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
import Layout from '../components/layout/layout'
import { Link } from 'gatsby'
Amplify.configure(config)

const IndexPage = () => {

  return (
    <Layout>
      <Link to="/app/home">Home</Link>
      <Link to="/app/login">Login</Link>
    </Layout>
  )
}

export default IndexPage
