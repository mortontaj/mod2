import React from 'react';
import Home from './Home';
// import RHome from './reduxHome';
// import Home1 from './Home1';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer)

export default function HomePage() {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    )
}

{/* <RHome/>
            <Home1/> */}