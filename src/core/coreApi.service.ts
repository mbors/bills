import axios from "axios";

const baseUrl = 'http://localhost:3002/';

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
