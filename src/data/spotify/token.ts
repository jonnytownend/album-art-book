var TOKEN: string | null = null

export function setToken(token: string) {
    TOKEN = token
}

export function getToken(): string | null {
    return TOKEN
}
