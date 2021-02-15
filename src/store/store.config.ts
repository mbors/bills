import {
    configureStore,
    getDefaultMiddleware,
  ThunkAction,
    Action
} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer, {RootState} from './reducer.config';

const middleware = [
    ...getDefaultMiddleware()
];

const store = configureStore({reducer: rootReducer, middleware});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store
