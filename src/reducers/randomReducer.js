const initialState = {
  marketValue: 1000,
};

export default function randomReducer(state = initialState, action) {
  switch (action.type) {
    case "Deposit":
      return { marketValue: state.marketValue + 10000 };
    case "Withdraw":
      if (state.marketValue <= 10000) return { marketValue: 0 };
      else return { marketValue: state.marketValue - 10000 };
    case "Speculate":
      return {
        marketValue:
          state.marketValue +
          state.marketValue *
            0.0697303 *
            (-1 * Math.random() ** 0.5238 + Math.random() ** (1 - 0.5238)),
      };
    default:
      return { marketValue: state.marketValue };
  }
}
