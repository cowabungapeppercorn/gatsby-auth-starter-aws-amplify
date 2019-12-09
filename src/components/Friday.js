import React from 'react'
import TalksList from './TalksList'
import { Link } from 'gatsby'

const Friday = () => {
  return (
    <>
      <h2>Thursday AM<span style={{ float: 'right' }}><Link to="/">home</Link></span></h2>
      <TalksList track="General Session" timeframe="121400-121424" />
    </>
  )
}

export default Friday