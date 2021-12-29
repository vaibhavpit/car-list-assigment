import React from "react";

import { connect } from "react-redux";

import {
  addFeature,
  removeFeature,
  addFeatureOne,
  removeFeatureOne,
  addFeatureTwo,
  removeFeatureTwo
} from "./action";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  return (
    <div className="App">
      <div className="boxes">
        <div className="box">
          <Header car={props.carone} />
          <AddedFeatures
            car={props.carone}
            removeFeature={props.removeFeature}
          />
        </div>
        <div className="box">
          <AdditionalFeatures
            additionalFeatures={props.caroneadditionalFeatures}
            addFeature={props.addFeature}
          />
          <Total
            car={props.carone}
            additionalPrice={props.caroneadditionalPrice}
          />
        </div>
      </div>

      <div className="boxes">
        <div className="box">
          <Header car={props.cartwo} />
          <AddedFeatures
            car={props.cartwo}
            removeFeature={props.removeFeatureOne}
          />
        </div>
        <div className="box">
          <AdditionalFeatures
            additionalFeatures={props.cartwoadditionalFeatures}
            addFeature={props.addFeatureOne}
          />
          <Total
            car={props.cartwo}
            additionalPrice={props.cartwoadditionalPrice}
          />
        </div>
      </div>
      <div className="boxes">
        <div className="box">
          <Header car={props.carthree} />
          <AddedFeatures
            car={props.carthree}
            removeFeature={props.removeFeatureTwo}
          />
        </div>
        <div className="box">
          <AdditionalFeatures
            additionalFeatures={props.carthreeadditionalFeatures}
            addFeature={props.addFeatureTwo}
          />
          <Total
            car={props.carthree}
            additionalPrice={props.carthreeadditionalPrice}
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    caroneadditionalFeatures: state.carReducer.additionalFeatures,
    caroneadditionalPrice: state.carReducer.additionalPrice,
    cartwoadditionalFeatures: state.carReducerTwo.additionalFeatures,
    cartwoadditionalPrice: state.carReducerTwo.additionalPrice,
    carthreeadditionalFeatures: state.carReducerThree.additionalFeatures,
    carthreeadditionalPrice: state.carReducerThree.additionalPrice,
    carone: state.carReducer.car,
    cartwo: state.carReducerTwo.car,
    carthree: state.carReducerThree.car
  };
}

export default connect(mapStateToProps, {
  addFeature,
  removeFeature,
  addFeatureOne,
  removeFeatureOne,
  addFeatureTwo,
  removeFeatureTwo
})(App);
