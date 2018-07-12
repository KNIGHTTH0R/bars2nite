import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItem from '../helpers/SearchItem';
import ReservedItem from '../helpers/ReservedItem';
import * as actions from '../store/actions';

export class SearchPage extends Component {
  componentDidMount = () => {
    this.props.onLoadUserReservedBars();
    this.props.onLoadReservedBars();
  };

  render() {
    let userBarIds;
    let userBars = this.props.userBars;
    userBarIds = userBars ? userBars.map(bar => bar.yelpId) : [];

    let reservedBarIds;
    let reservedBars = this.props.reservedBars;
    reservedBarIds = reservedBars ? reservedBars.map(bar => bar.yelpId) : [];

    let searchedBars;
    if (this.props.bars) {
      searchedBars = this.props.bars.map(bar => {
        if (userBarIds.includes(bar.id)) {
          let index = userBarIds.indexOf(bar.id);
          return (
            <ReservedItem
              key={userBars[index].yelpId}
              name={userBars[index].name}
              img={userBars[index].image}
              price={userBars[index].price}
              website={userBars[index].website}
              location={userBars[index].location}
              going={userBars[index].numberGoing}
            />
          );
        } else if (reservedBarIds.includes(bar.id)) {
          let index = reservedBarIds.indexOf(bar.id);
          return (
            <SearchItem
              key={reservedBars[index].id}
              name={reservedBars[index].name}
              yelpId={reservedBars[index].yelpId}
              img={reservedBars[index].image}
              price={reservedBars[index].price}
              rating={reservedBars[index].rating}
              location={reservedBars[index].location}
              website={reservedBars[index].website}
              going={reservedBars[index].numberGoing}
            />
          );
        } else {
          return (
            <SearchItem
              key={bar.id}
              name={bar.name}
              yelpId={bar.id}
              img={bar.image_url}
              price={bar.price}
              rating={bar.rating}
              location={bar.location.display_address}
              website={bar.url}
              going="0"
            />
          );
        }
      });
    }

    let searchContent;

    if (this.props.loading) {
      searchContent = <div class="loader">Loading...</div>;
    } else {
      searchContent = searchedBars;
    }

    // console.log(this.props.bars);
    return <div className="SearchPage">{searchContent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    bars: state.bars.searchedBars,
    reservedBars: state.bars.reservedBars,
    userBars: state.bars.userBars,
    loading: state.bars.loading
  };
};

export default connect(
  mapStateToProps,
  actions
)(SearchPage);
