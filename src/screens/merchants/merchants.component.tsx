import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMerchants} from 'store/merchants/merchants.action';
import {merchantsSelectors} from 'store/merchants/merchants.selector';
import {Tabs} from 'screens/merchants/components/tabs/tabs.component';
import {generateInitialTabState, Tab, TAB_NAME} from 'store/tabs/types';
import {tabsSelectors} from 'store/tabs/tabs.selector';

export interface MerchantsProps {

}

export const Merchants = (props: MerchantsProps) => {
    const dispatch = useDispatch();
    const billMerchants = useSelector(merchantsSelectors.getMerchantsBills);
    const merchants = useSelector(merchantsSelectors.getMerchantsPotentialBills);
    const selectedTab = useSelector(tabsSelectors.getSelectedTab);
    const tabs = useSelector(tabsSelectors.getTabs);

    useEffect(() => {
        dispatch(getMerchants())

    }, [dispatch]);

    const getTabContent = (selectedTabName?: TAB_NAME) => {
        switch (selectedTabName) {
            case TAB_NAME.MERCHANTS_BILLS:
                return <div>{'Merchant bills'}</div>;
            case TAB_NAME.MERCHANTS_POTENTIAL_BILLS:
                return <div>{'Merchant potential bills'}</div>
            default:
                return <div></div>
        }
    }


    return (
        <div>
            <Tabs tabs={tabs}>
                {getTabContent(selectedTab?.name)}
            </Tabs>
        </div>
    );
};
