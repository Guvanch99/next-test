import axios from "axios";

const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

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

export const getGames = async () => {
    try {
        const { data } = await api.get(`/games?key=${API_KEY}`);
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