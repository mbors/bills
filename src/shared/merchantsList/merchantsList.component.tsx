import React from 'react';
import {Merchant} from 'models/merchant.types';
import {MerchantRow} from 'shared/merchantsList/elements/merchantRow/merchantRow.component';
import {SkeletonLoading} from 'shared/skeletonLoading/skeletonLoading.component';

export interface MerchantsListProps {
    merchants?: Merchant[],
    emptyStateMsg: string,
    loading: boolean
}

export const MerchantsList = ({merchants, loading, emptyStateMsg}: MerchantsListProps) => {
    if (!merchants) {
        return <span>{'Unfortunately no data is available'}</span>
    }
    return (
        <div>
            {loading ? <SkeletonLoading count={5}/> : merchants.length !== 0 ? merchants.map(merchant => <MerchantRow key={merchant.name}
                merchant={merchant}/>) : emptyStateMsg}
        </div>
    );
};
