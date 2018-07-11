import React from 'react';

const SearchItem = props => {
  return (
    <div className="SearchItem">
      <div className="SearchItem__details-box">
        <img src={props.img} alt="img" width="300" />
        <h2 className="SearchItem__name">{props.name}</h2>
      </div>
      <p className="SearchItem__price">{props.price}</p>
      {/* <p className="SearchItem__rating">{props.rating}</p> */}
      <button className="SearchItem__going">
        <span className="SearchItem__going--visible">Attend</span>
        <span className="SearchItem__going--invisible">Going: 0</span>
      </button>
    </div>
  );
};

export default SearchItem;
