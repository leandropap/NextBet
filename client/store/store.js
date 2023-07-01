import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { matchSlice } from "./slices/matchSlice"


export const useStore = create((...a) => ({
    ...matchSlice(...a)
}))

export default useStore