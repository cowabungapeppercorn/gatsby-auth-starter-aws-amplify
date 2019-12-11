import React from 'react'
import { Link } from 'gatsby'
import EpicTalksList from '../TalksList/EpicTalksList'

const CardiologyClinicUpdate = () => {
  return (
    <>
      <h2>Cardiology Clinic Update
        <span style={{ float: 'right' }}><Link to="/app/home">back</Link></span>
      </h2>
      <EpicTalksList track="Cardiology Clinic Update" />
    </>
  )
}

export default CardiologyClinicUpdate