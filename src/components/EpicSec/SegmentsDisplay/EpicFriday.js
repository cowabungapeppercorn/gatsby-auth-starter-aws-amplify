import React from 'react'
import EpicTalksList from '../TalksList/EpicTalksList'
import { Link } from 'gatsby'

const EpicFriday = () => {
  return (
    <>
      <h2>Friday<span style={{ float: 'right' }}><Link to="/app/home">back</Link></span></h2>
      <EpicTalksList timeframe="050300-050324" />
    </>
  )
}

export default EpicFriday