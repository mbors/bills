import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMerchants} from 'store/merchants/merchants.action';
import {merchantsSelectors} from 'store/merchants/merchants.selector';

export interface MerchantsProps {

}

export const Merchants = (props: MerchantsProps) => {
    const dispatch = useDispatch();
    const merchants = useSelector(merchantsSelectors.getAllMerchants);

    useEffect(()=>{
        dispatch(getMerchants())

    }, [dispatch]);

    console.log('merchants ', merchants);
    return (
        <div>

        </div>
    );
};
