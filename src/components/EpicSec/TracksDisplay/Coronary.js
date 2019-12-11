import React from 'react'
import { Link } from 'gatsby'
import EpicTalksList from '../TalksList/EpicTalksList'

const Coronary = () => {
  return (
    <>
      <h2>Coronary
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <EpicTalksList track="Coronary Track" />
    </>
  )
}

export default Coronary