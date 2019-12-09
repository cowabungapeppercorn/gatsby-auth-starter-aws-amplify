import React from 'react'
import { Link } from 'gatsby'
import TalksList from '../TalksList'

const NurseTech = () => {
  return (
    <>
      <h2>Nurse Tech<span style={{ float: 'right' }}><Link to="/">home</Link></span></h2>
      <TalksList track="Nurse-Tech" />
    </>
  )
}

export default NurseTech