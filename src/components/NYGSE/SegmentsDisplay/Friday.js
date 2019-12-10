import React from 'react'
import TalksList from '../TalksList/TalksList'
import { Link } from 'gatsby'

const Friday = () => {
  return (
    <>
      <h2>Friday<span style={{ float: 'right' }}><Link to="/app/home">back</Link></span></h2>
      <TalksList track="General Session" timeframe="121400-121424" />
    </>
  )
}

export default Friday