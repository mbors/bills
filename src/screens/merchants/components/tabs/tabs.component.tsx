import React from 'react';
import {Tab} from 'store/tabs/types';
import {useDispatch} from 'react-redux';
import {setSelectedTab} from 'store/tabs/tabs.action';

interface TabsProps {
    tabs: Tab[],
    children: JSX.Element
}

export const Tabs = ({tabs, children}: TabsProps) => {
    const dispatch = useDispatch();

    const onClick = (tab: Tab) => {
        if(!tab.isSelected){
            dispatch(setSelectedTab(tab))
        }
    };



    return (
        <>
            <div>
                {tabs.map((tab: Tab) => <div style={tab.isSelected ? {color: 'green'}: {color: 'black'}} onClick={() => onClick(tab)}>{tab.name}</div>)}
            </div>
            {children}
        </>
    )
};
