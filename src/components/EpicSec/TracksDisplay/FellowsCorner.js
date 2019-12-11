import React from 'react'
import { Link } from 'gatsby'
import EpicTalksList from '../TalksList/EpicTalksList'

const FellowsCorner = () => {
  return (
    <>
      <h2>Fellow's Corner
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <EpicTalksList track="Fellows Corner" />
    </>
  )
}

export default FellowsCorner