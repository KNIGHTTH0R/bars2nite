import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import SideNav from './SideNav';

export class Header extends Component {
  state = {
    searchInput: '',
    sideNavShow: false
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

  toggleSideNav = () => {
    this.setState(prevState => {
      return { sideNavShow: !prevState.sideNavShow };
    });
  };

  onSearchBars = () => {
    if (this.state.searchInput !== '') {
      this.props.onSearchBars(this.state.searchInput);
      this.props.history.push('/search');
      this.setState({ searchInput: '' });
    }
  };

  render() {
    return (
      <div className="Header">
        <nav className="navigation">
          <span className="navigation__header">
            <Link to="/">
              <i className="fa fa-glass glass-icon--1" aria-hidden="true" />
              <i className="fa fa-glass glass-icon--2" aria-hidden="true" />
            </Link>
          </span>
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
            <li className="sidenav-icon">
              <i
                onClick={this.toggleSideNav}
                className="fa fa-bars"
                aria-hidden="true"
              />
            </li>

            <li
              className="SideNav"
              style={{
                marginRight: this.state.sideNavShow ? '0' : '-150px',
                opacity: this.state.sideNavShow ? 1 : 0
              }}
            >
              <SideNav />
            </li>
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
