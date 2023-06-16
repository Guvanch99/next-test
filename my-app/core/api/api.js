import axios from "axios";
import {API_KEY, API_URL} from "../../config";

export const api = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getGameById = async id => {
    const { data } = await api.get(`/games/${id}?key=${API_KEY}`)
    return data
}

export const getGames = async (params={}) => {
    try {
        console.log(API_URL, API_KEY)
        const { data } = await api.get('/games', {
            params: { ...params, page_size: 4, key: API_KEY }
        });

        return data.results;
    } catch (error) {
        console.error('Error getting games:', error);
        throw error;
    }
};

export const getScreenshotsById = async (gameId) => {
    try {
        const { data } = await api.get(`/games/${gameId}/screenshots?key=${API_KEY}`);
        return data.results;
    } catch (error) {
        console.error('Error getting games:', error);
        throw error;
    }
};
