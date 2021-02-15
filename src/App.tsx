import React from 'react';
import welcomeIcon from './assets/welcome.jpg';
import {Provider} from 'react-redux';
import store from 'store/store.config';

const App: React.FunctionComponent = () => (
    <Provider store={store}>

    </Provider>
);

export default App;
