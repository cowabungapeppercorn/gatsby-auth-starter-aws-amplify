import React from 'react'
import EpicTalksList from '../TalksList/EpicTalksList'
import { Link } from 'gatsby'

const EpicSaturday = () => {
  return (
    <>
      <h2>Saturday<span style={{ float: 'right' }}><Link to="/app/home">back</Link></span></h2>
      <EpicTalksList timeframe="050400-050424" />
    </>
  )
}

export default EpicSaturday