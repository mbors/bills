import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchMerchants, patchMerchant} from 'services/merchant.service';
import {Merchant} from 'models/merchant.types';
import {toast} from 'react-toastify';

export enum MERCHANTS_ACTIONS {
    FETCH_MERCHANTS = 'FETCH_MERCHANTS',
    TOGGLE_IS_BILL = 'TOGGLE_IS_BILL'
}


const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const getMerchants = createAsyncThunk(MERCHANTS_ACTIONS.FETCH_MERCHANTS, async () => {
    try {
        await delay(500); // imitating real life case
        return await fetchMerchants();
    } catch (e) {
        toast.error('Something went wrong..');
        throw e;
    }
});

export const togglePropertyIsBill = createAsyncThunk(MERCHANTS_ACTIONS.TOGGLE_IS_BILL, async (data: { id: string, value: boolean }) => {
    try {
        const {id, value} = data;
        await delay(500); // imitating real life case
        const updatedMerchant: Merchant = await patchMerchant(id, {isBill: value});
        toast.success(value ? 'Successfully added' : 'Successfully removed');
        return updatedMerchant
    } catch (e) {
        toast.error('Something went wrong..');
        throw e;
    }
});
