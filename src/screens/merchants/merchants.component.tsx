import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMerchants} from 'store/merchants/merchants.action';
import {merchantsSelectors} from 'store/merchants/merchants.selector';
import {TAB_NAME} from 'store/tabs/types';
import {tabsSelectors} from 'store/tabs/tabs.selector';
import {TabNavigation} from 'screens/merchants/components/tabNavigation/tabNavigation.component';
import {MerchantsList} from 'shared/merchantsList/merchantsList.component';
import './merchants.scss';

export interface MerchantsProps {

}

export const Merchants = (props: MerchantsProps) => {
    const dispatch = useDispatch();
    const bills = useSelector(merchantsSelectors.getBills);
    const potentialBills = useSelector(merchantsSelectors.getPotentialBills);
    const selectedTab = useSelector(tabsSelectors.getSelectedTab);
    const tabs = useSelector(tabsSelectors.getTabs);
    const loading = useSelector(merchantsSelectors.getLoading);


    useEffect(() => {
        dispatch(getMerchants())
    }, [dispatch]);

    const getTabContent = (selectedTabName?: TAB_NAME) => {
        switch (selectedTabName) {
            case TAB_NAME.MERCHANTS_BILLS:
                return <MerchantsList merchants={bills} loading={loading} emptyStateMsg={'You have no bills'}/>;
            case TAB_NAME.MERCHANTS_POTENTIAL_BILLS:
                return <MerchantsList loading={loading} merchants={potentialBills}
                                      emptyStateMsg={'You have no potential bills'}/>;
            default:
                return <span>{'Something went wrong'}</span>
        }
    };


    return (
        <div className={'merchants-container'}>
            <TabNavigation tabs={tabs}>
                {getTabContent(selectedTab?.name)}
            </TabNavigation>
        </div>
    );
};
