import React from 'react'
import TalksList from '../TalksList/TalksList'
import { Link } from 'gatsby'

const ThursdayAm = () => {
  return (
    <>
      <h2>Thursday AM<span style={{ float: 'right' }}><Link to="/">home</Link></span></h2>
      <TalksList track="General Session" timeframe="121300-121312" />
    </>
  )
}

export default ThursdayAm