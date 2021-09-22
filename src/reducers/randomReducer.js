const initialState = {
    marketValue:1000
};
    
export default function randomReducer(state= initialState, action) {
    switch(action.type){
        case 'Deposit':
            return { marketValue: state.marketValue + 10000
            }  
        case 'Withdraw':
            if (state.marketValue >= 10000) return 0
            else
                return { marketValue: state.marketValue - 10000
            }
        case 'Speculate':          
            return { marketValue: state.marketValue + state.marketValue * .08 * ((-(Math.random()**.52338) + Math.random()**(1-.52338)))
            }
        default:
            return { marketValue: state.marketValue }
}
}
