export const initialStateZ = {
  additionalPrice: 0,
  car: {
    price: 37990,
    name: "2019 Tesla Model 3",
    image:
      "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/cr/model-years/9175-2018-tesla-model-3",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "AutoPilot ", price: 7000 },
    { id: 2, name: "19 Inch Sport Wheels", price: 1500 },
    { id: 3, name: "Midnight Silver Metallic Color", price: 1000 },
    { id: 4, name: "SuperCharging", price: 0 }
  ]
};

export const carReducerThree = (state = initialStateZ, action) => {
  switch (action.type) {
    case "ADD_FEATURE_TWO":
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
    case "REMOVE_FEATURE_TWO":
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
