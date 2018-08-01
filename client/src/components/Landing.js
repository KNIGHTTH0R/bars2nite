import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions';

import mp4Video from '../assets/video.mp4';
import webmVideo from '../assets/video.webm';

export class Landing extends Component {
  componentDidMount = () => {
    this.props.onLoadReservedBars();
  };

  render() {
    let secondaryHeader;
    if (this.props.auth) {
      secondaryHeader = (
        <Link to="all-events" className="header-box__secondary">
          rspv now
        </Link>
      );
    } else {
      secondaryHeader = (
        <a href="/auth/google" className="header-box__secondary">
          rsvp now
        </a>
      );
    }

    return (
      <div className="Landing">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay loop>
            <source src={mp4Video} type="video/mp4" />
            <source src={webmVideo} type="video/webm" /> Your browser is not
            supported!
          </video>
        </div>

        <div className="header-box">
          <h2 className="header-box__primary">
            <i className="fa fa-glass glass-icon--1" aria-hidden="true" />
            <i className="fa fa-glass glass-icon--2" aria-hidden="true" />
            <span>Bars2Nite</span>
          </h2>
          {secondaryHeader}
        </div>

        <div className="github-link">
          <a href="https://github.com/c-clin/bars2nite">
            <i className="fa fa-github-alt" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(Landing);
