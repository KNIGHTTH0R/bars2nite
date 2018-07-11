import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const SearchItem = props => {
  return (
    <div className="SearchItem">
      <div className="SearchItem__details-box">
        <img src={props.img} alt="img" width="300" />
        <h2 className="SearchItem__name">{props.name}</h2>
      </div>
      <p className="SearchItem__price">{props.price}</p>
      {/* <p className="SearchItem__rating">{props.rating}</p> */}
      <button
        className="SearchItem__going"
        onClick={() => props.onReserveBar(props)}
      >
        <span className="SearchItem__going--visible">RSPV</span>
        <span className="SearchItem__going--invisible">Going: 0</span>
      </button>
    </div>
  );
};

export default connect(
  null,
  actions
)(SearchItem);
