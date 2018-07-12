import React from 'react';

const ReservedItem = props => {
  let location = props.location.reduce((prev, current) =>
    prev.concat(' ' + current)
  );

  return (
    <div className="SearchItem">
      <div className="SearchItem__details-box">
        <img src={props.img} alt="img" width="300" />
        <h2 className="SearchItem__name">{props.name}</h2>
      </div>
      <p className="SearchItem__price">{props.price}</p>

      <p className="SearchItem__location">{location}</p>
      <a href={props.website} className="SearchItem__yelp-link">
        <i className="fa fa-yelp" aria-hidden="true" />
      </a>

      <button className="SearchItem__going reserved">
        <span className="SearchItem__going--visible">Reserved</span>
        <span className="SearchItem__going--invisible">
          Going: {props.going}
        </span>
      </button>
    </div>
  );
};

export default ReservedItem;
