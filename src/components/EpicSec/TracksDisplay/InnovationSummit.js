import React from 'react'
import { Link } from 'gatsby'
import EpicTalksList from '../TalksList/EpicTalksList'

const InnovationSummit = () => {
  return (
    <>
      <h2>Innovative Summit
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <EpicTalksList track="Innovation Summit" />
    </>
  )
}

export default InnovationSummit