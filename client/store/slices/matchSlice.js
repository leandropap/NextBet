import axios from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY

const api = axios.create({
    apiUrl,
    params: { date: '2023-06-29' },
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
})

export const matchSlice = ((set, get) => ({
    allMatches: [],
    last: [],
    today: [],
    tomorrow: [],
    getMatches: async () => {
        try {
            const res = await api.get(apiUrl)
            set({
                allMatches: res.data.response,
                last: res.data.response.slice(0, 5),
                today: res.data.response.slice(5, 10),
                tomorrow: res.data.response.slice(10, 15),
            })
        } catch (e) {
            console.log(e)
        }
    }
}))