import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import EventItem from '../helpers/EventItem';

export class Events extends Component {
  componentDidMount() {
    this.props.onLoadUserReservedBars();
  }

  render() {
    let eventContent;
    if (this.props.userBars) {
      eventContent = this.props.userBars.map(bar => {
        return (
          <EventItem
            name={bar.name}
            going={bar.numberGoing}
            image={bar.image}
            yelpId={bar.yelpId}
            location={bar.location}
            website={bar.website}
          />
        );
      });
    }

    return (
      <div className="Event">
        <h2>Events you rsvp'ed</h2>
        <div className="Event__content">{eventContent}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userBars: state.bars.userBars
  };
};

export default connect(
  mapStateToProps,
  actions
)(Events);
