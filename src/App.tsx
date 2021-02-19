import React from 'react';
import {Provider} from 'react-redux';
import store from 'store/store.config';
import {Merchants} from 'screens/merchants/merchants.component';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.scss'

const App: React.FunctionComponent = () => (
    <Provider store={store}>
        <div className={'app-container'}>
            <Merchants/>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
        </div>
    </Provider>
);

export default App;
