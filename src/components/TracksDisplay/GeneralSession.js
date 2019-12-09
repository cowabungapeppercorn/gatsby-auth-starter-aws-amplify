import React from 'react'
import { Link } from 'gatsby'
import TalksList from '../TalksList/TalksList'

const GeneralSession = () => {
  return (
    <>
      <h2>Doris C. Barnie GI Nurses and Associates Course
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <TalksList track="General Session" />
    </>
  )
}

export default NurseTech