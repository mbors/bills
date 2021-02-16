import {RootState} from '../reducer.config';
import {Merchant} from 'models/merchant.types';

const getMerchantsBills = (state: RootState): Merchant[] | undefined => state.merchants.merchants.filter(merchant => merchant.isBill);

const getMerchantsPotentialBills = (state: RootState): Merchant[] | undefined => state.merchants.merchants.filter(merchant => !merchant.isBill);

export const merchantsSelectors = {getMerchantsBills, getMerchantsPotentialBills};
