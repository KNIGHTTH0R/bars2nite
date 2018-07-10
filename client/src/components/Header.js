import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    console.log(this.props.auth);
    let authText = this.props.auth ? "I'm logged in" : "I'm logged out";

    return (
      <div className="Header">
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__header">Nightlife</li>
            <li className="navigation__item">
              <a href="/auth/google">Login with Google</a>
            </li>
            <li className="navigation__item">
              <a href="/api/logout">Logout</a>
            </li>
            <li>{authText}</li>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
