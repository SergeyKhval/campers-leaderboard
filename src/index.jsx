import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import 'normalize.css';
import rootReducer, { getCampers } from './reducer';
import { fetchCampers } from './actions';
import { apiMiddleware } from './middleware';
import './style.css';

const store = createStore(rootReducer, [], applyMiddleware(createLogger(), apiMiddleware));

class Campers extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCampers());
  }

  render() {
    const { campers } = this.props;

    return (
      <div>
        <h1>Campers</h1>
        <ul>
          {campers.map(c => <li>{c.username}</li>)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    campers: getCampers(state),
  };
}

const ConnectecCampers = connect(mapStateToProps)(Campers);

function Main() {
  return (
    <Provider store={store}>
      <ConnectecCampers />
    </Provider>
  );
}

render(<Main />, document.getElementById('root'));