import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { createMatchSlice } from "./slices/matchSlice"


export const useStore = create((...a) => ({
    ...createMatchSlice(...a)
}))

export default useStore