import React from 'react';
import {Tab} from 'store/tabs/types';
import {useDispatch} from 'react-redux';
import {setSelectedTab} from 'store/tabs/tabs.action';
import 'screens/merchants/components/tabNavigation/tabNavigation.scss';

interface TabNavigationProps {
    tabs: Tab[],
    children: JSX.Element
}

export const TabNavigation = ({tabs, children}: TabNavigationProps) => {
    const dispatch = useDispatch();

    const onClick = (tab: Tab) => {
        if (!tab.isSelected) {
            dispatch(setSelectedTab(tab))
        }
    };

    return (
        <div className={'main-container'}>
            <div className={'tabs-container'}>
                {tabs.map((tab: Tab) => <button key={tab.name} className={`tab-item ${tab.isSelected ? 'selected' : ''}`}
                                               onClick={() => onClick(tab)}>
                    {tab.customName}
                </button>)}
            </div>
            <div className={'tab-content-container'}>
                {children}
            </div>

        </div>
    )
};
