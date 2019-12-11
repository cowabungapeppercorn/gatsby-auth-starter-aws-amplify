import React from 'react'
import { Link } from 'gatsby'
import EpicTalksList from '../TalksList/EpicTalksList'

const Nursing = () => {
  return (
    <>
      <h2>Lazarus Battle
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <EpicTalksList track="Nursing Track" />
    </>
  )
}

export default Nursing