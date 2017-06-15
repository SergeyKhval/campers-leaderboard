import React, { Component } from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { connect, Provider } from "react-redux";
import { createLogger } from "redux-logger";
import "normalize.css";
import rootReducer, { getCampers } from "./reducer";
import { fetchCampers } from "./actions";
import { apiMiddleware } from "./middleware";
import Campers from "./components/Campers";
import "./style.css";

const store = createStore(rootReducer, [], applyMiddleware(createLogger(), apiMiddleware));

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCampers());
  }

  render() {
    return (
      <div>
        <h1>Campers</h1>
        <Campers campers={this.props.campers}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    campers: getCampers(state),
  };
}

const Connected = connect(mapStateToProps)(Home);

function Main() {
  return (
    <Provider store={store}>
      <Connected/>
    </Provider>
  );
}

render(<Main/>, document.getElementById('root'));