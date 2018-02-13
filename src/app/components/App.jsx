import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';

const store = configure();

import EpisodesComponent from "./EpisodesComponent";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                  <div>
                    <Route path="/" component={EpisodesComponent}>
                    </Route>
                  </div>
                </Router>
            </Provider>
        );
    }
};
