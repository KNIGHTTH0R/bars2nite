import React from 'react';

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
        <button>Cancel RSVP</button>
      </div>
      <div className="EventItem__going">
        <p>{props.going}</p>
        <p>going</p>
      </div>
    </div>
  );
};

export default EventItem;
