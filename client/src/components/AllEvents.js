import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLoadUserReservedBars, onLoadReservedBars } from '../store/actions';
import EventItem from '../helpers/EventItem';
import EventItemView from '../helpers/EventItemView';

export class AllEvents extends Component {
  componentDidMount() {
    this.props.onLoadUserReservedBars();
    this.props.onLoadReservedBars();
  }

  render() {
    let eventContent;
    let userBarIds;
    let userBars = this.props.userBars;
    userBarIds = userBars ? userBars.map(bar => bar.yelpId) : [];

    if (this.props.reservedBars) {
      eventContent = this.props.reservedBars.map(bar => {
        if (userBarIds.includes(bar.yelpId)) {
          return (
            <EventItem
              key={bar.yelpId}
              name={bar.name}
              going={bar.numberGoing}
              image={bar.image}
              yelpId={bar.yelpId}
              location={bar.location}
              website={bar.website}
              price={bar.price}
            />
          );
        } else {
          return (
            <EventItemView
              key={bar.yelpId}
              name={bar.name}
              going={bar.numberGoing}
              image={bar.image}
              yelpId={bar.yelpId}
              location={bar.location}
              website={bar.website}
              price={bar.price}
            />
          );
        }
      });
    }

    let content;
    if (this.props.loading) {
      content = <div className="loader">Loading...</div>;
    } else {
      content = (
        <div>
          <h2 className="Event__heading">All Events</h2>
          <div className="Event__content">{eventContent}</div>
        </div>
      );
    }

    return <div className="Event">{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    reservedBars: state.bars.reservedBars,
    userBars: state.bars.userBars,
    loading: state.bars.loading
  };
};

export default connect(
  mapStateToProps,
  { onLoadReservedBars, onLoadUserReservedBars }
)(AllEvents);
