import React from "react";

const AddedFeature = (props) => {
  const { removeFeature, removeFeatureOne, removeFeatureTwo } = props;
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          removeFeature(props.feature) ||
            removeFeatureOne(props.feature) ||
            removeFeatureTwo(props.feature);
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
