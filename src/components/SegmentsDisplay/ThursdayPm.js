import React from 'react'
import TalksList from '../TalksList/TalksList'
import { Link } from 'gatsby'

const ThursdayPm = () => {
  return (
    <>
      <h2>Thursday PM<span style={{ float: 'right' }}><Link to="/app/home">back</Link></span></h2>
      <TalksList track="General Session" timeframe="121312-121324" />
    </>
  )
}

export default ThursdayPm