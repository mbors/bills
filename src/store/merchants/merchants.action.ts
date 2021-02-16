import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchMerchants} from 'services/merchant.service';

export enum MERCHANTS_ACTIONS {
    FETCH_MERCHANTS = 'FETCH_MERCHANTS',
}


export const getMerchants = createAsyncThunk(MERCHANTS_ACTIONS.FETCH_MERCHANTS, async () => {
    try {
       return await fetchMerchants();
    } catch (e) {
        throw e;
    }
});
