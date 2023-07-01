import axios from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY
console.log(apiKey, apiUrl)

const api = axios.create({
    apiUrl,
    params: { date: '2023-06-29' },
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
})

export const matchSlice = ((set, get) => ({
    matches: [],
    getMatches: async () => {
        try {
            const response = await api.get(apiUrl)
            set({ matches: response.data.response })
            console.log(response.data.response)
        } catch (e) {
            console.log(e)
        }
    }
}))