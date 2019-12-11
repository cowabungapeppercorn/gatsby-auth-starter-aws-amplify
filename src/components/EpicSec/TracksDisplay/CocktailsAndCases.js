import React from 'react'
import { Link } from 'gatsby'
import EpicTalksList from '../TalksList/EpicTalksList'

const CocktailsAndCases = () => {
  return (
    <>
      <h2>Cocktails and Cases
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <EpicTalksList track="Cocktails and Cases" />
    </>
  )
}

export default CocktailsAndCases