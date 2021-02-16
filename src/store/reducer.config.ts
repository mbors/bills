import {combineReducers} from 'redux';
import {tabsReducer} from 'store/tabs/tabs.reducer';
import {merchantsReducer} from 'store/merchants/merchants.reducer';

const rootReducer = combineReducers({...tabsReducer, ...merchantsReducer});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
