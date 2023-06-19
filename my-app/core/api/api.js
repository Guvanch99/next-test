import axios from "axios";
import {API_KEY, API_URL} from "../../config";

export const api = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        key: API_KEY
    }
})

export const getGameById = async id => {
    const { data } = await api.get(`/games/${id}`)
    return data
}

export const getGames = async (params={}) => {
    try {
        const { data } = await api.get('/games', {
            params: { ...params, page_size: 12}
        });

        return data.results;
    } catch (error) {
        console.error('Error getting games:', error);
        throw error;
    }
};

export const getScreenshotsById = async (gameId) => {
    try {
        const { data } = await api.get(`/games/${gameId}/screenshots`);
        return data.results;
    } catch (error) {
        console.error('Error getting games:', error);
        throw error;
    }
};

export const getPlatforms = async () => {
    try {
        const { data } = await api.get('/platforms');
        return data.results;
    } catch (error) {
        console.error('Error getting games:', error);
        throw error;
    }
}
