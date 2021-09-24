const initialState = {
  marketValue: 1000,
};

export default function randomReducer(state = initialState, action) {
  switch (action.type) {
    case "Deposit":
      return { marketValue: Number(state.marketValue + 10000) };
    case "Withdraw":
      if (state.marketValue <= 10000) return { marketValue: 0 };
      else return { marketValue: Number(state.marketValue - 10000) };
    case "Speculate":
      return {
        marketValue: Number(
          state.marketValue +
            state.marketValue *
              0.0697303 *
              (Math.random() ** 0.5138 - Math.random() ** (1 - 0.5138))
        ),
      };
    default:
      return { marketValue: state.marketValue };
  }
}
