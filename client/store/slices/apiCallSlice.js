import axios from "axios"

const createApiCallSlice = (set, get) => ({
    teams: [],
    addTeams() {
        set(state => ({
            teams: [...teams]
        }))
    }
})

export default createApiCallSlice