import React from 'react'
import { Link } from 'gatsby'
import { isLoggedIn } from '../utils/auth';

const Home = () => <div>
  {isLoggedIn && (
    <h2>42nd Annual New York Course</h2>
    <ul><li><Link to="/app/thursday-am">Day 1 - Thursday, Dec 13, 2018 AM</Link></li>
    <li><Link to="/app/thursday-pm">Day 1 - Thursday, Dec 13, 2018 PM</Link></li>
    <li><Link to="/app/friday">Day 2 - Friday, Dec 14, 2018 AM-PM</Link></li>
    <li><Link to="/app/nurse-tech">Doris C. Barnie GI Nurses and Associates Course</Link></li></ul>
  )}
</div>

export default Home