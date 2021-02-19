import axios from "axios";
import {APIConstants} from 'shared/constants';

const baseUrl = APIConstants.base;

const headers = {headers: {"content-type": "application/json"}};

/**
 *
 * @param path
 */
export const fetchRequest = async (path: string): Promise<any[]> => {
    try {
        return (await axios.get(`${baseUrl}${path}`)).data;
    } catch (error) {
        throw error
    }
};

export const patchRequest = async (path: string, body: any): Promise<any> => {
    try {
        return (await axios.patch(`${baseUrl}${path}`, JSON.stringify(body), headers)).data;
    } catch (error) {
        throw error
    }
};
