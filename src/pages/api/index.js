import axios from 'axios'

export const getPopular = async (type) => {
    return await axios.get(
        `https://api.themoviedb.org/3/${type}/popular?api_key=252d60063de5e2a6e49de1f14f0f68fe&language=pt-BR&page=1`
    )
}

export const getWatchProviders = async (type, id) => {
    return await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=252d60063de5e2a6e49de1f14f0f68fe`
    )
}