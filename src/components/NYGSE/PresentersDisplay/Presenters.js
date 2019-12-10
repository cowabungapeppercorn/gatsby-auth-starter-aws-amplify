import React from 'react'
import AlphabeticalList from '../TalksList/AlphabeticalList'
import { Link } from 'gatsby'

const Presenters = () => {
  return (
    <>
      <h2>Presenters A-Z:<span style={{ float: 'right' }}><Link to="/app/home">back</Link></span></h2>
      <AlphabeticalList />
    </>
  )
}

export default Presenters