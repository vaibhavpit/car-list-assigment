export const initialStateS = {
  additionalPrice: 0,
  car: {
    price: 115559,
    name: "2020 Porsche 911",
    image:
      "https://static.tcimg.net/vehicles/primary/4f7b2a657f3d32d4/2020-Porsche-911-white-full_color-driver_side_front_quarter.png",
    features: []
  },
  additionalFeatures: [
    { id: 9, name: "Sport Package ", price: 3390 },
    { id: 10, name: "Rear-axle steering", price: 2090 },
    { id: 11, name: "Bose sound system", price: 1600 },
    { id: 12, name: "GT Silver Metallic paint", price: 830 }
  ]
};

export const carReducerTwo = (state = initialStateS, action) => {
  switch (action.type) {
    case "ADD_FEATURE_ONE":
      let addTotal = state.car.price;
      return {
        ...state,
        additionalFeatures: state.additionalFeatures.filter(
          (feature) => feature.id !== action.payload.id
        ),
        car: {
          ...state.car,
          price: (addTotal += action.payload.price),
          features: [...state.car.features, action.payload]
        }
      };
    case "REMOVE_FEATURE_ONE":
      let removeTotal = state.car.price;
      return {
        ...state,
        car: {
          ...state.car,
          price: (removeTotal -= action.payload.price),
          features: state.car.features.filter(
            (feature) => feature.id !== action.payload.id
          )
        },
        additionalFeatures: [...state.additionalFeatures, action.payload]
      };
    default:
      return state;
  }
};
