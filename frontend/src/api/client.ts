const BASE_URL = 'http://localhost:8080'

async function request<T>(path: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
        credentials: 'include',
        ...options
    })

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
    }

    return res.json()
}

export const api = {
    getMe: () => request<MeResponse>('/api/me')
}

export interface MeResponse {
    id: number
    username: string
    role: 'ADMIN' | 'APPLICANT' | 'REFERENCE'
}