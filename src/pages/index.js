import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { isLoggedIn } from '../utils/auth';

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const loginLink = (
  <>
    <Link to="/app/login">Sign In</Link><br />
  </>
);

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site with multi-user authentication powered by <a href="https://amplify.aws">AWS Amplify</a></p>
    {!isLoggedIn() && loginLink}
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
  </Layout>
)

export default IndexPage
