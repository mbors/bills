import {Fetching} from 'models/generic.types';
import {Merchant} from 'models/merchant.types';


export interface MerchantsState extends Fetching {
    merchants: Merchant[]
}


