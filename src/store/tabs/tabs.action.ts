import {createAction, PayloadAction} from '@reduxjs/toolkit';
import {Tab} from './types';

export enum TAB_ACTION {
    SET_SELECTION = 'SET_SELECTION',
}

export const setSelectedTab = createAction(TAB_ACTION.SET_SELECTION, (payload: Tab) => ({payload}));
