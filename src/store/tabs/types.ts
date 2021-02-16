export interface Tab {
    name: TAB_NAME,
    isSelected: boolean
}

export enum TAB_NAME {
    MERCHANTS_BILLS = 'MERCHANTS_BILLS',
    MERCHANTS_POTENTIAL_BILLS = 'MERCHANTS_POTENTIAL_BILLS'
}

export interface TabsState {
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


