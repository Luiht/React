import type { GiphyResponse } from '../interfaces/giphy.response'
import { giphyApi } from "../api/giphy.api";



interface Gif {
    id: string;
    title: string;
    url: string;
    width: number;
    height: number;
}

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi<GiphyResponse>('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: query,
            limit: 25,
            offset: 0,
            rating: 'g', 
        },
    })

    console.log(response.data)

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height) 
    }))
}