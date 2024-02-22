import React from 'react';
import "../styles/Home.css";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <h2>Home</h2>
        <p>Welcome to the Home page</p>
        <Link to='/college'><p>College</p></Link>
      </div>
      
      
    </div>
    
  );
};

export default Home;