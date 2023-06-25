import create from "zustand"

const useStore = create((set) => {

})

export default useStore

// if (typeof window !== "undefined") {
//     const connnection = window.__REDUX_DEVTOOLS_EXTENSION__?.connnect({
//         name: "name Field"
//     })

//     connnection?.init(useStore.getState())
//     useStore.subscribe((newState) => {
//         connection?.send("State", newState)
//     })
// }

// if (process.env.NODE_ENV === "development") {
//     mountStoreDevtool("Store", useStore)
// }