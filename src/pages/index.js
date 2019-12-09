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

<<<<<<< HEAD
  return navigate("/app/home");
=======
  return (
    <App />
  )
>>>>>>> 88ba5bdd50f499969bcc75899c931e2857b4450e
}

export default IndexPage
