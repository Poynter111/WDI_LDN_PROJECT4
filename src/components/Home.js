import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../lib/Auth';

const Home = () => {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <h1 className="title">Game day planner</h1>
        <div className="homePageLogo"></div>
        <div className="columns is-centered">
          <div className="column is-half">
            {!Auth.isAuthenticated() && <Link to="/register" className="button homePagebtn">Register</Link>}
            {!Auth.isAuthenticated() && <Link to="/login" className="button homePagebtn">Login</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
