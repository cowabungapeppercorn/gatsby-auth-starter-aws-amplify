import React from 'react'
import { Link } from 'gatsby'
import EpicTalksList from '../TalksList/EpicTalksList'

const EpicGeneralSession = () => {
  return (
    <>
      <h2>General Session
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <EpicTalksList track="General Session" />
    </>
  )
}

export default EpicGeneralSession