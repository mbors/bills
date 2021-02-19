import {Merchant} from 'models/merchant.types';
import {fetchRequest, patchRequest} from 'core/coreApi.service';

export const fetchMerchants = async (): Promise<Merchant[]> => {
    try {
        return await fetchRequest('merchants') as Merchant[]
    } catch (e) {
        throw e;
    }
};

export const patchMerchant = async (id: string, body: Partial<Merchant>): Promise<Merchant> => {
    try {
        return await patchRequest(`merchants/${id}`, body) as Merchant;
    } catch (e) {
        throw e;
    }
};
