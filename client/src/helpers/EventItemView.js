import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const EventItemView = props => {
  let location = props.location.reduce((prev, current) =>
    prev.concat(' ' + current)
  );

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
        <p>{location}</p>
      </div>

      <div className="EventItem__going">
        <p>{props.going}</p>
        <p>going</p>
      </div>

      <div className="EventItem__price">
        <span>{props.price}</span>
      </div>
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
)(EventItemView);
