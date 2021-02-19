import {RootState} from '../reducer.config';
import {Merchant} from 'models/merchant.types';

const getBills = (state: RootState): Merchant[] | undefined => state.merchants.merchants.filter(merchant => merchant.isBill);
const getPotentialBills = (state: RootState): Merchant[] | undefined => state.merchants.merchants.filter(merchant => !merchant.isBill);
const getLoading = (state: RootState): boolean => state.merchants.loading;
const getError = (state: RootState): boolean => state.merchants.error;

export const merchantsSelectors = {getBills, getPotentialBills, getLoading, getError};
