import { getToken } from "./token"

export async function getAlbums() {
    const response = await fetch('https://api.spotify.com/v1/me/albums', {
        headers: {
            "Authorization": `Bearer ${getToken()}`
        }
    })
    return response
}
