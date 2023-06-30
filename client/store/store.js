import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { createMatchSlice } from "./slices/matchSlice"


export const useStore = create((...a) => ({
    ...createMatchSlice(...a)
}))

export default useStore

// if (typeof window !== "undefined") {
//     const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
//         name: 'name Field'
//     })

//     connection?.init(useStore, getState())
//     useStore.subscribe((newState) => {
//         connection?.send("State", newState)
//     })
// }


/*
Partidos, 
Ligas,
Jugadores,
Equipos,
*/
