import {API_KEY, API_URL} from "../../config";

export const getGameById = async id => {
    try {
        const response= await fetch(`${API_URL}/games/${id}?key=${API_KEY}`)
        return await response.json()
    }catch (error){
        throw new Error(error)
    }
}

export const getGames = async (getGamesParams={}) => {
    const params = { ...getGamesParams, page_size: '12' };
    const queryString = new URLSearchParams(params).toString();

    try {
        const response= await fetch(`${API_URL}/games?key=${API_KEY}&${queryString}`)
        const responseToJson= await response.json()

        return responseToJson.results

    } catch (error) {
        console.error('Error getting games:', error);
        throw error;
    }
};

export const getScreenshotsById = async (gameId) => {
    try {
        const response= await fetch(`${API_URL}/games/${gameId}/screenshots?key=${API_KEY}`)
        return await response.json()
    } catch (error) {
        console.error('Error getting games:', error);
        throw error;
    }
};

export const getPlatforms = async () => {
    try {
        const response= await fetch(`${API_URL}/platforms?key=${API_KEY}`)
        const responseToJson= await response.json()
        return responseToJson.results
    } catch (error) {
        console.error('Error getting games:', error);
        throw error;
    }
}
