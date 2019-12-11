import React from 'react'
import { Link } from 'gatsby'
import EpicTalksList from '../TalksList/EpicTalksList'

const Peripheral = () => {
  return (
    <>
      <h2>Lazarus Battle
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <EpicTalksList track="Peripheral Track" />
    </>
  )
}

export default Peripheral