import React from 'react'
import EpicTalksList from '../TalksList/EpicTalksList'
import { Link } from 'gatsby'

const EpicThursday = () => {
  return (
    <>
      <h2>Thursday<span style={{ float: 'right' }}><Link to="/app/home">back</Link></span></h2>
      <EpicTalksList timeframe="121400-121424" />
    </>
  )
}

export default EpicThursday