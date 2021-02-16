import {createReducer} from '@reduxjs/toolkit';
import {
    setSelectedTab
} from './tabs.action'
import {TabsState, generateInitialTabState} from './types';

const initialState: TabsState = {
    tabs: generateInitialTabState()
};


export const tabsReducer = {
    mainTabs: createReducer(initialState, (builder) => {
        builder.addCase(setSelectedTab, (state, {payload}) => {
            state.tabs = state.tabs.map(tab => tab.name === payload.name ? {...tab, isSelected: true} : {
                ...tab,
                isSelected: false
            })
        });

        builder.addDefaultCase((state, action) => {
            return state;
        });
    })
};
