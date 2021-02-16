import {RootState} from '../reducer.config';
import {Tab} from 'store/tabs/types';

const getTabs = (state: RootState): Tab[] => state.mainTabs.tabs;
const getSelectedTab = (state: RootState): Tab | undefined => state.mainTabs.tabs.find(tab => tab.isSelected);

export const tabsSelectors = {getSelectedTab, getTabs};
