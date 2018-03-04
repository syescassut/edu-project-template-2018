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
import EpisodeDetailComponent from "./EpisodeDetailComponent";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact={true} path="/" component={EpisodesComponent}></Route>
                        <Route exact={true} path="/:id" component={EpisodeDetailComponent} />        
                    </div>
                </Router>
            </Provider>
        );
    }
};
