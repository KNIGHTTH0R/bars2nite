import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

import mp4Video from '../assets/video.mp4';
import webmVideo from '../assets/video.webm';

export class Landing extends Component {
  componentDidMount = () => {
    this.props.onLoadReservedBars();
  };

  render() {
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
          <h2 className="header-box__primary">Bars2Nite</h2>
          <p className="header-box__secondary">rspv now</p>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Landing);
