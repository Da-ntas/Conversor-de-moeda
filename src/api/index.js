import axios from "axios";

const requester = axios.create({
    baseURL: 'https://api.currencyfreaks.com',
})

export const apiGet = async (path) => {
    const response = await requester.get(path);

    if (!response)
        return []
    
    return response.data
}