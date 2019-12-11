import React from 'react'
import { Link } from 'gatsby'
import { isLoggedIn } from '../utils/auth';

const Home = () => <div>
  {isLoggedIn() && (
    <>
      <h2>NYSGE - 42nd Annual New York Course</h2>
      <h4>By Day:</h4>
      <ul>
        <li><Link to="/app/thursday-am">Day 1 - Thursday, Dec 13, 2018 AM</Link></li>
        <li><Link to="/app/thursday-pm">Day 1 - Thursday, Dec 13, 2018 PM</Link></li>
        <li><Link to="/app/friday">Day 2 - Friday, Dec 14, 2018 AM-PM</Link></li>
        <li><Link to="/app/nurse-tech">Doris C. Barnie GI Nurses and Associates Course</Link></li>
      </ul>
      <h4>By Track:</h4>
      <ul>
        <li><Link to="/app/general-session">General Session</Link></li>
        <li><Link to="/app/nurse-tech">Doris C. Barnie GI Nurses and Associates Course</Link></li>
      </ul>
      <h4>A - Z:</h4>
      <ul>
        <li><Link to="/app/presenters">Presenters A - Z</Link></li>
      </ul>
      <hr></hr>
      <h2>EPIC-SEC 2019</h2>
      <ul>
        <li><Link to="/app/epic-friday">Day 1 - Friday, May 2, 2019</Link></li>
      </ul>
    </>
  )}
</div>

export default Home