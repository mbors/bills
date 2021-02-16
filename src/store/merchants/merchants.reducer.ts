import {createReducer} from '@reduxjs/toolkit';
import {MerchantsState} from 'store/merchants/types';
import {getMerchants} from 'store/merchants/merchants.action';

const initialState: MerchantsState = {
    merchants: [],
    error: false,
    loading: false
};


export const merchantsReducer = {
    merchants: createReducer(initialState, (builder) => {
        builder.addCase(getMerchants.pending, (state) => {
            state.error = false;
            state.loading = true;
        });

        builder.addCase(getMerchants.rejected, (state) => {
            state.error = true;
            state.loading = false;
        });

        builder.addCase(getMerchants.fulfilled, (state, {payload}) => {
            state.error = false;
            state.loading = false;
            state.merchants = payload;
        });

        builder.addDefaultCase((state, action) => {
            return state;
        });
    })
};
