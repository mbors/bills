import {Merchant} from 'models/merchant.types';
import {fetchRequest} from 'core/coreApi.service';

export const fetchMerchants = async (): Promise<Merchant[]> => {
    try {
        return await fetchRequest('merchants') as Merchant[]
    } catch (e) {
        throw e;
    }
};
