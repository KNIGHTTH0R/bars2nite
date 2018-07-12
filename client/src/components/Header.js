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
    console.log(this.state.sideNavShow);
    this.setState(prevState => {
      return { sideNavShow: !prevState.sideNavShow };
    });
  };

  onSearchBars = () => {
    this.props.onSearchBars(this.state.searchInput);
    this.props.history.push('/search');
    this.setState({ searchInput: '' });
  };

  render() {
    return (
      <div className="Header">
        <nav className="navigation">
          <span className="navigation__header">
            <i className="fa fa-glass glass-icon" aria-hidden="true" />
            <Link to="/">Bars2Nite</Link>
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
                marginRight: this.state.sideNavShow ? '-150px' : '0',
                opacity: this.state.sideNavShow ? 0 : 1
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
