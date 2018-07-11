import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

export class Header extends Component {
  state = {
    searchInput: ''
  };

  inputChangeHandler = e => {
    this.setState({ searchInput: e.target.value });
  };

  keyPressHandler = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.onSearchBars();
    }
  };

  onSearchBars = () => {
    this.props.onSearchBars(this.state.searchInput);
    this.setState({ searchInput: '' });
    this.props.history.push('/search');
  };

  render() {
    const authLinks = (
      <li className="navigation__item">
        <a href="/auth/google">Login with Google</a>
      </li>
    );

    const guestLinks = (
      <li className="navigation__item">
        <a href="/api/logout">Logout</a>
      </li>
    );

    return (
      <div className="Header">
        <nav className="navigation">
          <span className="navigation__header">Nightlife</span>
          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Your city or zip code"
              value={this.state.searchInput}
              onChange={this.inputChangeHandler}
              onKeyDown={this.keyPressHandler}
            />
            <i
              className="fa fa-search search__icon"
              aria-hidden="true"
              onClick={this.onSearchBars}
            />
          </form>

          <ul className="navigation__list">
            {this.props.auth ? authLinks : guestLinks}
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

export default connect(
  mapStateToProps,
  actions
)(withRouter(Header));
