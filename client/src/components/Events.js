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
            price={bar.price}
          />
        );
      });
    }

    let content;
    if (this.props.loading) {
      content = <div class="loader">Loading...</div>;
    } else {
      content = (
        <div>
          <h2 className="Event__heading">Your Events</h2>
          <div className="Event__content">{eventContent}</div>
        </div>
      );
    }

    return <div className="Event">{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    userBars: state.bars.userBars,
    loading: state.bars.loading
  };
};

export default connect(
  mapStateToProps,
  actions
)(Events);
