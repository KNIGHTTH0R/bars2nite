import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItem from '../helpers/SearchItem';

export class SearchPage extends Component {
  render() {
    let searchedBars;
    if (this.props.bars) {
      searchedBars = this.props.bars.map(bar => {
        return (
          <SearchItem
            key={bar.id}
            name={bar.name}
            img={bar.image_url}
            price={bar.price}
            rating={bar.rating}
          />
        );
      });
    }

    // console.log(this.props.bars);
    return <div className="SearchPage">{searchedBars}</div>;
  }
}

const mapStateToProps = state => {
  return {
    bars: state.bars.searchedBars
  };
};

export default connect(mapStateToProps)(SearchPage);
