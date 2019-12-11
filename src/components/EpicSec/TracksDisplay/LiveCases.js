import React from 'react'
import { Link } from 'gatsby'
import EpicTalksList from '../TalksList/EpicTalksList'

const LiveCases = () => {
  return (
    <>
      <h2>Live Cases
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <EpicTalksList track="Live Case Demonstrations" />
    </>
  )
}

export default LiveCases