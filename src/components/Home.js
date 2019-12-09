import React from 'react'
import { Link } from 'gatsby'
import { isLoggedIn } from '../utils/auth';
import TalksList from '../components/TalksList';

const Home = () => <div>
  {isLoggedIn && (
    <ul><li><Link to="/thursday-am">Day 1 - Thursday, Dec 13, 2018 AM</Link></li>
    <li><Link to="/thursday-pm">Day 1 - Thursday, Dec 13, 2018 PM</Link></li>
    <li><Link to="/friday">Day 2 - Friday, Dec 14, 2018 AM-PM</Link></li>
    <li><Link to="/nursetech">Doris C. Barnie GI Nurses and Associates Course</Link></li></ul>
  )}
</div>

export default Home