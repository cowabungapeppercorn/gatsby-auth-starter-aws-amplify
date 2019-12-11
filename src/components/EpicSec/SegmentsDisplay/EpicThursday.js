import React from 'react'
import EpicTalksList from '../TalksList/EpicTalksList'
import { Link } from 'gatsby'

const EpicThursday = () => {
  return (
    <>
      <h2>Thursday<span style={{ float: 'right' }}><Link to="/app/home">back</Link></span></h2>
      <EpicTalksList timeframe="050100-050224" />
    </>
  )
}

export default EpicThursday