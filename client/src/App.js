import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import Header from './components/Header';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    const Landing = () => <h2>Landing</h2>;
    const Testing = () => <h2>Testing Route</h2>;
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" component={Landing} />
            <Route path="/test" component={Testing} />
          </div>
        </BrowserRouter>
        {/* <a href="/auth/google">Sign in with Google</a> */}
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
