export interface Tab {
    name: TAB_NAME,
    customName: string,
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
        customName: 'Bills',
        isSelected: true,
    },
    {
        name: TAB_NAME.MERCHANTS_POTENTIAL_BILLS,
        customName: 'Potential bills',
        isSelected: false,
    }
];


