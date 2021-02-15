import {combineReducers} from 'redux';
import {tabsReducer} from 'store/tabs/tabs.reducer';

const rootReducer = combineReducers({...tabsReducer});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
