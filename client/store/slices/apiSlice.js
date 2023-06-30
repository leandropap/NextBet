import axios from "axios"
const apiKey = 'cbd421557cmsh8c60cd002921087p155c09jsn89c71f46c142'
const hoy = Date.now()
console.log(hoy)

const api = axios.create({
    baseURL: `https://api-football-v1.p.rapidapi.com/v3/fixtures`,
    params: { date: '2023-06-29' },
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
})

export const createMatchSlice = ((set, get) => ({
    matches: [],
    getMatches: async () => {
        try {
            const response = await api.get(api.baseURL)
            set({ matches: response.data.response })
            console.log(response.data.response)
        } catch (e) {
            console.log(e)
        }
    }
}))