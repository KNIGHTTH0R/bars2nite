import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    console.log(this.props.auth);
    let authText = this.props.auth ? "I'm logged in" : "I'm logged out";
    return (
      <div>
        <a href="/auth/google">Login with Google</a>
        <br />
        <a href="/api/logout">Logout</a>
        <br />
        <h3>{authText}</h3>
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
