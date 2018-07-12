import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import Header from './components/Header';
import Landing from './components/Landing';
import SearchPage from './components/SearchPage';
import Events from './components/Events';
import AllEvents from './components/AllEvents';

// testing purpose
import axios from 'axios';
window.axios = axios;

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/events" exact component={Events} />
            <Route path="/all-events" exact component={AllEvents} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
