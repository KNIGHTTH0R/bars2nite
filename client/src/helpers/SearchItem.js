import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const SearchItem = props => {
  let location = props.location.reduce((prev, current) =>
    prev.concat(' ' + current)
  );

  let price;
  props.price
    ? (price = <p className="SearchItem__price">{props.price}</p>)
    : (price = 0);

  return (
    <div className="SearchItem">
      <div className="SearchItem__details-box">
        <img src={props.img} alt="img" width="300" />
        <h2 className="SearchItem__name">{props.name}</h2>
      </div>

      {price}

      <p className="SearchItem__location">{location}</p>
      <a href={props.website} className="SearchItem__yelp-link">
        <i className="fa fa-yelp" aria-hidden="true" />
      </a>

      <button
        className="SearchItem__going rsvp"
        onClick={
          props.auth ? () => props.onReserveBar(props) : props.onLoginError
        }
      >
        <span className="SearchItem__going--visible">RSVP</span>
        <span className="SearchItem__going--invisible">
          Going: {props.going}
        </span>
      </button>
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
)(SearchItem);
