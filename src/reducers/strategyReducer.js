const initialState2 = {
    marketValue2:1000
};

export default function strategyReducer(state2= initialState2, action) {
    switch(action.type){
        case 'Deposit2':
            return { marketValue2: state2.marketValue2 + 10000
            }  
        case 'Withdraw2':
            if (state2.marketValue2 >= 10000) return 0
            else
                return { marketValue2: state2.marketValue2 - 10000
            }
        case "Trade":
            let win = .90
            if (Math.random() < win){
                return {marketValue2: state2.marketValue2 * (1 + 0.01973* Math.random())}
            }
            else
            return {marketValue2: state2.marketValue2 * (1 - 0.04271 * Math.random())}
        default:
            return { marketValue2: state2.marketValue2 }
    }
}
