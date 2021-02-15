import {createReducer} from '@reduxjs/toolkit';
import {
    setSelectedTab
} from './tabs.action'
import {TabsState, generateInitialTabState} from './types';

const initialState: TabsState = {
    tabs: generateInitialTabState(),
    error: false,
    loading: false
};


export const tabsReducer = {
    mainTabs: createReducer(initialState, (builder) => {
        builder.addCase(setSelectedTab, (state, {payload}) => {

        });

        builder.addDefaultCase((state, action) => {
            return state;
        });
    })
};
