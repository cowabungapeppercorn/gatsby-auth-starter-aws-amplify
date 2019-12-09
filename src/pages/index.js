import React from 'react'
import { navigate } from '@reach/router'
import { isLoggedIn } from '../utils/auth'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => {
  if (!isLoggedIn()) {
    navigate("/app/login");
  }

  return navigate("/app/home");
}

export default IndexPage
