import React from 'react'
import EpicAlphabeticalList from '../TalksList/EpicAlphabeticalList'
import { Link } from 'gatsby'

const EpicPresenters = () => {
  return (
    <>
      <h2>Presenters A-Z:<span style={{ float: 'right' }}><Link to="/app/home">back</Link></span></h2>
      <EpicAlphabeticalList />
    </>
  )
}

export default EpicPresenters