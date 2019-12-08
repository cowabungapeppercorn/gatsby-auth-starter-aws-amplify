import React from 'react'
import { Link } from 'gatsby'
import { isLoggedIn } from '../utils/auth';
import TalksList from '../components/TalksList';

const Home = () => <div>
  <TalksList />
	</div>

export default Home