import {RootState} from '../reducer.config';
import {Merchant} from 'models/merchant.types';

const getMerchantsWithBills = (state: RootState): Merchant[] | undefined => state.merchants.merchants.filter(merchant => merchant.isBill);

const getMerchants = (state: RootState): Merchant[] | undefined => state.merchants.merchants.filter(merchant => !merchant.isBill);

const getAllMerchants = (state: RootState): Merchant[]  => state.merchants.merchants;


export const merchantsSelectors = {getMerchantsWithBills, getMerchants, getAllMerchants};
