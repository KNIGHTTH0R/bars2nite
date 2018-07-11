import React from 'react';

const SearchItem = props => {
  return (
    <div className="SearchItem" width="300">
      <h2>{props.name}</h2>
      <img src={props.img} alt="img" width="300" />
      <p>{props.rating}</p>
    </div>
  );
};

export default SearchItem;
