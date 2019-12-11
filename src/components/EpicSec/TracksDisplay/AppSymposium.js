import React from 'react'
import { Link } from 'gatsby'
import EpicTalksList from '../TalksList/EpicTalksList'

const AppSymposium = () => {
  return (
    <>
      <h2>App Symposium
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <EpicTalksList track="APP Symposium" />
    </>
  )
}

export default AppSymposium