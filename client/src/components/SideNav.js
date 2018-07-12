import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SideNav = props => {
  const authLinks = (
    <div className="links-container">
      <li className="links-container__item">
        <Link to="/events">Events</Link>
      </li>
      <li className="links-container__item">
        <a href="/api/logout">Logout</a>
      </li>
    </div>
  );

  const guestLinks = (
    <li className="links-container__item">
      <a href="/auth/google">Login with Google</a>
    </li>
  );

  return <div className="side-nav">{props.auth ? authLinks : guestLinks}</div>;
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(SideNav);
