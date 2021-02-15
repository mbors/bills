import {Fetching} from 'models/generic.types';

export interface Tab {
    name: TAB_NAME,
    isSelected: boolean
}

export const enum TAB_NAME {
    MERCHANTS_BILLS = 'MERCHANTS_BILLS',
    MERCHANTS_POTENTIAL_BILLS = 'MERCHANTS_POTENTIAL_BILLS'
}

export interface TabsState extends Fetching {
    tabs: Tab[]
}

export const generateInitialTabState = (): Tab[] => [
    {
        name: TAB_NAME.MERCHANTS_BILLS,
        isSelected: true,
    },
    {
        name: TAB_NAME.MERCHANTS_POTENTIAL_BILLS,
        isSelected: false,
    }
];


