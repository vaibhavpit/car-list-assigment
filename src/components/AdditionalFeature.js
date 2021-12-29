import React from "react";

const AdditionalFeature = (props) => {
  const { addFeature, addFeatureOne, addFeatureTwo } = props;
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          addFeature(props.feature) ||
            addFeatureOne(props.feature) ||
            addFeatureTwo(props.feature);
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
