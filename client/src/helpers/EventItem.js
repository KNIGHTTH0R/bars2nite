import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const EventItem = props => {
  return (
    <div className="EventItem">
      <div className="EventItem__image-box">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="EventItem__details">
        <h2>
          <a href={props.website}>{props.name}</a>
        </h2>
        <hr />
        <p>{props.location}</p>
        <button type="button" onClick={() => props.onCancelReservation(props)}>
          Cancel RSVP
        </button>
      </div>
      <div className="EventItem__going">
        <p>{props.going}</p>
        <p>going</p>
      </div>
    </div>
  );
};

export default connect(
  null,
  actions
)(EventItem);
