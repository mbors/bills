import React from 'react';
import welcomeIcon from './assets/welcome.jpg';
import {Provider} from 'react-redux';
import store from 'store/store.config';
import {Merchants} from 'screens/merchants/merchants.component';

const App: React.FunctionComponent = () => (
    <Provider store={store}>
        <Merchants/>
    </Provider>
);

export default App;
