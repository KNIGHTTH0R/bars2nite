import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const EventItem = props => {
  let button;
  let rsvp;
  if (props.auth) {
    button = (
      <button type="button" onClick={() => props.onCancelReservation(props)}>
        Cancel RSVP
      </button>
    );

    rsvp = (
      <div className="EventItem__rsvped">
        <span>RSVP'd</span>
      </div>
    );
  }

  return (
    <div className="EventItem">
      <div className="EventItem__image-box">
        <img src={props.image} alt={props.name} />
      </div>

      <div className="EventItem__details">
        <h2>
          <a href={props.website} target="_blank">
            {props.name}
          </a>
        </h2>
        <hr />
        <p>{props.location}</p>
        <span>{button}</span>
      </div>

      <div className="EventItem__going">
        <p>{props.going}</p>
        <p>going</p>
      </div>

      {/* <div className="EventItem__price">
        <span>{props.price}</span>
      </div> */}

      {rsvp}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(EventItem);
