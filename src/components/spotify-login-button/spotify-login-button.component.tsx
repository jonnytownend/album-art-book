import { useCallback, useEffect, useState } from "react"
import { Button } from "./spotify-login-button.styles"

const CLIENT_ID = "xyz" // TODO: - Replace with actual client ID from Spotify dashboard
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

interface SpotifyLoginButtonProps {
    onLogin: (token: string) => void
}

export const SpotifyLoginButton = ({ onLogin }: SpotifyLoginButtonProps) => {
    useEffect(() => {
        let hash = window.location.hash
        let tokenStringArray = hash.split('access_token=')
        if (tokenStringArray.length > 1) {
            let token = tokenStringArray[1].split('&token_type')[0]
            onLogin(token)
        }
    }, [])

    return (
        <Button href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            LOGIN
        </Button>
    )
}
